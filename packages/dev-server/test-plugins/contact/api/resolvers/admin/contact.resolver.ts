import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Allow, Ctx, Permission, RequestContext } from '@vendure/core';

import { Contact } from '../../../entities/contact.entity';
import { ContactService } from '../../../services/contact.service';


@Resolver(() => Contact)
export class ContactResolver {
    constructor(private readonly contactService: ContactService) {
    }
    //  TODO: [GET]
    @Query()
    async getAllContact(@Ctx() ctx: RequestContext, @Args() args: any) {
        try {
            return await this.contactService.getAllContactService(ctx, args)
        } catch (error) {
            return null;
        }
    }
    @Query()
    async getContactById(@Ctx() ctx: RequestContext, @Args() input: any) {
        try {
            return await this.contactService.getContactById(ctx, input)
        } catch (error) {
            return null;
        }
    }
    @Query()
    async getContactByEmail(@Ctx() ctx: RequestContext, @Args() input: any) {
        try {
            return await this.contactService.getContactByEmail(ctx, input)
        } catch (error) {
            return null;
        }
    }
    //  TODO: [POST]
    @Mutation(() => Contact, { nullable: true })
    async createContact(
        @Ctx() ctx: RequestContext,
        @Args('input') input: any
    ): Promise<Contact | null> {
        try {
            const result = await this.contactService.createContact(ctx, input);
            return result;
        } catch (error: any) {
            return null;
        }
    }

    //  TODO: [DELETE]
    @Mutation()
    async deleteContactById(
        @Ctx() ctx: RequestContext,
        @Args() input: any
    ) {
        try {
            const rs = await this.contactService.deleteContactById(ctx, input)
            return rs
        } catch (error) {
            return false
        }
    }
    @Mutation()
    async deleteContacts(
        @Ctx() ctx: RequestContext,
        @Args() input: any
    ) {
        try {
            const rs = await this.contactService.deleteContacts(ctx, input)
            return rs
        } catch (error) {
            return false
        }
    }
}
