import { registerRouteComponent } from "@vendure/admin-ui/core";

import { ContactListComponent } from "./components/contact-list/contact-list.component";

export default [
    registerRouteComponent({
        component: ContactListComponent,
        path: '',
        breadcrumb: [
            {
                label: 'Contacts',
                link: ['/extensions/contact']
            }
        ]
    })
]