import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
import { ModalService, registerBulkAction, BulkAction, ItemOf, BulkActionClickContext, DataService, NotificationService, DeletionResult } from "@vendure/admin-ui/core";
import { unique } from "@vendure/common/lib/unique";
import { EMPTY } from "rxjs";
import { map, switchMap } from 'rxjs/operators';

import { GetAllContactDocument, GetAllContactQuery } from "../../gql/graphql";

import { ContactListComponent } from "./contact-list.component";
import { DELETE_CONTACT } from "./contact-list.graphql";

type ContactCollectionItemType = ItemOf<GetAllContactQuery, 'getAllContact'>

export const deleteContactListBulkAction: BulkAction<ContactCollectionItemType
    , ContactListComponent> = {
    location: "contact-list",
    label: "Delete contacts",
    icon: 'trash',
    onClick({ injector, hostComponent, selection, clearSelection }): void {
        const modalService = injector.get(ModalService)
        const dataService = injector.get(DataService);
        const notificationService = injector.get(NotificationService);
        const contactIds = unique(selection.map(contact => contact.id))
        modalService.dialog({
            title: `Are you sure you want to delete these contacts?`,
            body: `${selection.map(contact => `Info #${contact.id}: ` + '\n' + 'Name: ' + contact.fullName + '\n' + 'Email:' + contact.email).join('\n\n')}`,
            buttons: [
                { type: 'secondary', label: 'Cancel' },
                { type: 'danger', label: 'Delete all', returnValue: true },
            ],
        })
            .pipe(
                switchMap(response =>
                    response ? dataService.mutate(DELETE_CONTACT, { ids: contactIds }) : EMPTY,
                ),
            )
            .subscribe((rs: any) => {
                let deleted = 0;
                const errors: string[] = [];
                for (const item of rs.deleteContacts) {
                    if (item.result === DeletionResult.DELETED) {
                        deleted++;
                    } else if (item.message) {
                        errors.push(item.message);
                    }
                }
                if (0 < deleted) {
                    notificationService.success(_(`Delete all contacts success !`), {
                        count: deleted,
                    });
                }
                if (0 < errors.length) {
                    notificationService.error(errors.join('\n'));
                }
                hostComponent.refresh();
                clearSelection();
            });
    }
}