import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from "@angular/core"
import { FormBuilder, FormGroup, UntypedFormGroup, Validators } from "@angular/forms";
import { DataService, Dialog, NotificationService, SharedModule } from "@vendure/admin-ui/core";

import { CREATE_CONTACT } from "./contact-create.graphql";

@Component({
    selector: 'contact-detail',
    templateUrl: './contact-create.component.html',
    styleUrl: './contact-create.component.scss',
    standalone: true,
    imports: [SharedModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateContactComponent {
    contactForm: FormGroup;
    constructor(private fb: FormBuilder, private notifyService: NotificationService, private dataService: DataService) {
        this.contactForm = this.fb.group({
            fullName: ['', [(ctrl: any) => Validators.pattern(/[a-zA-Z\s]+/)(ctrl)]],
            companyName: ['', [(ctrl: any) => Validators.pattern(/[a-zA-Z\s]+/)(ctrl)]],
            businessPhone: [''],
            email: ['', [(ctrl: any) => Validators.email(ctrl)]],
            message: [''],
        });

    }
    onSubmit(): void {
        if (this.contactForm.invalid) {
            this.notifyService.error('Validation Failed', {
                message: 'Please fill in all required fields correctly.',
            });
            return;
        }
        const formData = this.contactForm.value;
        this.dataService.mutate(CREATE_CONTACT, { input: formData }).subscribe({
            next: () => {
                this.notifyService.success('Create Success', { entity: 'Contact' });
            },
            error: (err) => {
                this.notifyService.error('Create Failed', { entity: 'Contact', message: err.message });
            }
        });

    }
}