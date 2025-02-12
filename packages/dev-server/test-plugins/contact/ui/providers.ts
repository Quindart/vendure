import { addActionBarItem, addNavMenuItem, addNavMenuSection, registerDataTableComponent } from "@vendure/admin-ui/core";
// import { TableContactList } from "./components/contact-list/table.component";

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
    // registerDataTableComponent({
    //     component: TableContactList,
    //     tableId: 'contact-list',
    //     columnId: 'slug',
    // }),
]