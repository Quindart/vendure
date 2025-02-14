import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from "@angular/core"
import { FormBuilder, UntypedFormGroup } from "@angular/forms";
import { ResultOf } from '@graphql-typed-document-node/core';
import { LanguageCode, SharedModule, TypedBaseDetailComponent } from "@vendure/admin-ui/core";

import { GetContactByIdDocument } from "../../gql/graphql";

@Component({
    selector: 'contact-detail',
    templateUrl: './contact-detail.component.html',
    standalone: true,
    imports: [SharedModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactDetailComponent extends TypedBaseDetailComponent<typeof GetContactByIdDocument, 'getContactById'> implements OnInit, OnDestroy {
    detailForm = this.formBuilder.group({
        fullName: [''],
        email: [''],
        message: [''],
        businessPhone: [''],
        companyName: [''],
    });
    constructor(private formBuilder: FormBuilder) {
        super()
    }
    ngOnInit() {
        this.init();
    }

    ngOnDestroy() {
        this.destroy();
    }
    protected setFormValues(entity: NonNullable<ResultOf<typeof GetContactByIdDocument>['getContactById']>, languageCode: LanguageCode): void {
        const contact: Pick<typeof entity, 'businessPhone' | 'companyName' | 'email' | 'fullName' | 'id' | 'message'> = { ...entity }
        this.detailForm.patchValue(contact);
    }
}