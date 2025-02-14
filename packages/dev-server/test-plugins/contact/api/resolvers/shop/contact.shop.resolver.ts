import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Allow, Ctx, Permission, RequestContext } from '@vendure/core';

import { Contact } from '../../../entities/contact.entity';
import { ContactService } from '../../../services/contact.service';


@Resolver(() => Contact)
export class ContactShopResolver {
    constructor(private readonly contactService: ContactService) {
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

}
