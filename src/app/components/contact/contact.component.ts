import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  isLoading: boolean = false;
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: [null, [Validators.pattern('^[a-zA-Z ]+$')]],
      email: [null, [Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
      subject: [null, [Validators.minLength(10)]],
      message: [null, [Validators.minLength(20)]],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isLoading = true;
      const templateParams = {
        name: this.contactForm.get('name')?.value,
        email: this.contactForm.get('email')?.value,
        subject: this.contactForm.get('subject')?.value,
        message: this.contactForm.get('message')?.value,
      };

      emailjs.send(
        'service_8wu3vab',
        'template_qn2naer',
        templateParams,
        '-aDMEDebjkmffbOMp'
      ).then((response) => {
        this.isLoading = false;
        console.log('SUCCESS!', response.status, response.text);
        this.toastr.success('Message sent successfully!');
        this.contactForm.reset();
      }).catch((err) => {
        this.isLoading = false;
        console.error('FAILED...', err);
        this.toastr.error('Failed to send message.');
      });
    } else {
      this.toastr.error('Please fill out the form correctly.');
    }
  }
}
