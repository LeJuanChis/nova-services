import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})
export class ContactPage {
  contactForm: FormGroup;
  isSubmitted = false;
  isSending = false;
  showSuccessMessage = false;

  // Opciones para el campo "Asunto"
  subjectOptions = ['Consulta de servicio', 'Asesoría estratégica', 'Soporte', 'Alianza comercial'];

  // Realizamos las validaciones
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(120)]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(1000)]],
    });
  }

  get fullName() { return this.contactForm.get('fullName'); }
  get email() { return this.contactForm.get('email'); }
  get subject() { return this.contactForm.get('subject'); }
  get message() { return this.contactForm.get('message'); }

  hasError(controlName: 'fullName' | 'email' | 'subject' | 'message'): boolean {
    const control = this.contactForm.get(controlName);
    return !!control && control.invalid && (control.touched || this.isSubmitted);
  }

  // Simulamos el envío del formulario
  onSubmit(): void {
    this.isSubmitted = true;
    this.showSuccessMessage = false;

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSending = true;

    setTimeout(() => {
      this.isSending = false;
      this.showSuccessMessage = true;
      this.contactForm.reset();
      this.isSubmitted = false;
    }, 900);
  }
}
