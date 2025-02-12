import { VendureEntity, DeepPartial } from "@vendure/core";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'contact' })
export class Contact extends VendureEntity {
    constructor(input?: DeepPartial<Contact>) {
        super(input);
    }
    @PrimaryGeneratedColumn('identity')
    id: string;

    @Column({ type: String, nullable: true })
    email: string;

    @Column({ type: String, nullable: true })
    fullName: string;

    @Column({ type: String, nullable: true })
    companyName: string

    @Column({ type: String, nullable: true })
    message: string;

    @Column({ type: String, nullable: true })
    businessPhone: string;

}