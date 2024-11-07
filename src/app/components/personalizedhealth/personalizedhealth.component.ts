import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { GlobalConstants } from '../../../utils/global-constants';
import { AuthService } from '../../Services/auth.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-personalizedhealth',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink,RouterOutlet],
  templateUrl: './personalizedhealth.component.html',
  styleUrl: './personalizedhealth.component.scss',
})
export class PersonalizedhealthComponent implements OnInit {
  contactUsForm!: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService) {}
  ngOnInit(): void {
    // this.authService.getToken().subscribe((res) => {
    //   console.log(res);
    // });
    this.contactUsForm = this.fb.group({
      firstName: ['', [Validators.pattern(GlobalConstants.firstnamePattern)]],
      email: ['', [Validators.pattern(GlobalConstants.emailPattern)]],
      phoneNumber: ['', [Validators.pattern(/^[0-9]{10}$/)]],
      message: [''],
    });
  }

  onSubmit() {
    if (this.contactUsForm.valid) {
    } else {
      this.contactUsForm.markAllAsTouched();
    }
  }
}
