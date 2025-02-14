// eslint-disable-next-line import/order
import { PluginCommonModule, VendurePlugin } from '@vendure/core';
import { AdminUiExtension } from '@vendure/ui-devkit/compiler';
import path from 'path';


import { ContactResolver } from './api/resolvers/admin/contact.resolver';
import { ContactShopResolver } from './api/resolvers/shop/contact.shop.resolver';
import { adminApiExtensions, shopApiExtensions } from './api/schema/schema-extension';
import { Contact } from './entities/contact.entity';
import { ContactService } from './services/contact.service';
// eslint-disable-next-line import/order

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
