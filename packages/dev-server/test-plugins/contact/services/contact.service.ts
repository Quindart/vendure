import { Injectable } from '@nestjs/common';
import { ListQueryBuilder, RequestContext, TransactionalConnection } from '@vendure/core';

import { Contact } from '../entities/contact.entity';

@Injectable()
export class ContactService {
    constructor(private connection: TransactionalConnection,
        private listQueryBuilder: ListQueryBuilder,
    ) {
    }
    async getAllContactService(ctx: RequestContext, args: any): Promise<{ items: Contact[], totalItems: number } | null> {
        if (!args) {
            throw new Error('Missing options');
        }
        try {
            const sql = this.listQueryBuilder.build(Contact, args.options || undefined, {
                ctx,
            });

            return await sql.getManyAndCount().then(([items, totalItems]) => {
                return { items, totalItems };
            });
        } catch (error) {
            return null
        }
    }


    async getContactById(ctx: RequestContext, input: any): Promise<Contact | null> {
        if (!input || !input.id) {
            throw new Error('Missing input data');
        }
        try {
            const contact = await this.connection.getRepository(ctx, Contact).findOne({ where: { id: input.id } });
            return contact;
        } catch (error) {
            return null;
        }
    }
    async getContactByEmail(ctx: RequestContext, input: any): Promise<Contact[] | null> {
        if (!input) {
            throw new Error('Missing input input');
        }
        try {
            const contacts = await this.connection.getRepository(ctx, Contact)
                .createQueryBuilder('contact')
                .where("contact.email = :email", { email: input.email })
                .getMany();
            return contacts;
        } catch (error) {
            return null;
        }
    }

    async deleteContactById(ctx: RequestContext, input: any) {
        if (!input) {
            throw new Error('Missing input data');
        }
        try {
            const contacts = await this.connection.getRepository(ctx, Contact).delete({ id: input.id })
            return contacts
        } catch (error) {
            return null
        }
    }
    async createContact(ctx: RequestContext, input: any) {
        if (!input) {
            throw new Error('Missing input data');
        }
        const contact = new Contact();
        Object.assign(contact, input);

        try {
            const savedContact = await this.connection
                .getRepository(ctx, Contact)
                .save(contact);
            return savedContact;

        } catch (error) {

            throw new Error('Failed to save contact');
        }
    }

}
