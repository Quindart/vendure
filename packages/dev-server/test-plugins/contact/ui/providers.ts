import { addActionBarItem, addNavMenuItem, addNavMenuSection, registerBulkAction, registerDataTableComponent } from "@vendure/admin-ui/core";

import { deleteContactListBulkAction } from "./components/contact-list/contact-list.bulk-action";
export default [
    addNavMenuSection(
        {
            id: 'contact',
            label: 'Contact',
            items: [
                {
                    id: 'contacts',
                    label: 'Contacts',
                    routerLink: ['/extensions/contact'],
                    icon: 'book',
                },
            ],
        },
        'contact',
    ),
    registerBulkAction(deleteContactListBulkAction)
]