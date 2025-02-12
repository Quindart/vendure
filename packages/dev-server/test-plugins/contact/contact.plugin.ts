// eslint-disable-next-line import/order
import { PluginCommonModule, VendurePlugin } from '@vendure/core';
import { AdminUiExtension } from '@vendure/ui-devkit/compiler';
import path from 'path';

import { ContactResolver } from './api/contact.resolver';
import { adminApiExtensions, shopApiExtensions } from './api/schema-extension';
import { Contact } from './entities/contact.entity';
import { ContactService } from './services/contact.service';
// eslint-disable-next-line import/order
import { ContactShopResolver } from './api/contact.shop.resolver';

@VendurePlugin({
    imports: [PluginCommonModule],
    entities: [Contact],
    configuration: config => {
        return config;
    },
    adminApiExtensions: {
        schema: adminApiExtensions,
        resolvers: [ContactResolver]
    },
    shopApiExtensions: {
        schema: shopApiExtensions,
        resolvers: [ContactShopResolver]
    },
    providers: [
        ContactService,
    ],
    compatibility: '^3.0.0',
})
export class ContactPlugin {
    static uiExtensions: AdminUiExtension = {
        extensionPath: path.join(__dirname, 'ui'),
        routes: [{
            route: 'contact',
            filePath: 'routes.ts'
        }],
        providers: ['providers.ts'],
    }
}
