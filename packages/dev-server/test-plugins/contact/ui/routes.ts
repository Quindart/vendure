import { registerRouteComponent } from "@vendure/admin-ui/core";

import { CreateContactComponent } from "./components/contact-create/contact-create.component";
import { ContactDetailComponent } from "./components/contact-detail/contact-detail.component";
import { GET_CONTACt_BY_ID } from "./components/contact-detail/contact-detail.graphql";
import { ContactListComponent } from "./components/contact-list/contact-list.component";

export default [
    registerRouteComponent({
        component: ContactListComponent,
        path: '',
        breadcrumb: [
            {
                label: 'Contacts',
                link: ['/extensions/contact'],
            },

        ]
    }),
    registerRouteComponent({
        path: 'create',
        component: CreateContactComponent,
        breadcrumb: [
            {
                label: 'Contacts',
                link: ['/extensions/contact'],
            },
            {
                label: 'New contact',
                link: ['/extensions/contact/create']
            },
        ]
    }),
    registerRouteComponent({
        path: ':id',
        component: ContactDetailComponent,
        query: GET_CONTACt_BY_ID,
        entityKey: 'getContactById',
        getBreadcrumbs: (entity: any) => [
            {
                label: 'Contacts',
                link: ['/extensions/contact'],
            },
            {
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                label: `Contact Info #${entity?.id}`,
                link: [],
            },
        ]
    })
]