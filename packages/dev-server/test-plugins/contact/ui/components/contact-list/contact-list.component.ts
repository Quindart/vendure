import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TypedBaseListComponent, SharedModule, DataService } from '@vendure/admin-ui/core';

import { GetAllContactDocument } from '../../gql/graphql';


@Component({
    selector: 'vdr-contact-list',
    templateUrl: "./contact-list.component.html",
    styleUrl: "./contact-list.component.scss",
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [SharedModule],

})
export class ContactListComponent extends TypedBaseListComponent<typeof GetAllContactDocument, 'getAllContact'> {
    readonly filters = this.createFilterCollection()
        .addFilter({
            name: 'fullName',
            type: { kind: 'text' },
            label: 'FullName',
            filterField: 'fullName',
        })
        .connectToRoute(this.route);

    readonly sorts = this.createSortCollection()
        .defaultSort('id', 'ASC')
        .addSort({ name: 'email' })
        .addSort({ name: 'fullName' })
        .addSort({ name: "companyName" })
        .connectToRoute(this.route);
    constructor(
        protected dataService: DataService,
        router: Router,
        route: ActivatedRoute,
    ) {
        super();
        super.configure({
            document: GetAllContactDocument,
            getItems: data => data.getAllContact,
            setVariables: (skip, take) => ({
                options: {
                    skip,
                    take,
                    filter: {
                        fullName: {
                            contains: this.searchTermControl.value,
                        },
                        ...this.filters.createFilterInput(),
                    },
                    sort: this.sorts.createSortInput(),
                },
            }),
            refreshListOnChanges: [this.filters.valueChanges, this.sorts.valueChanges],

        });
    }
}