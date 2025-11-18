import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SnackBarHarnessFilters } from '@angular/material/snack-bar/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-signup',
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent implements OnInit {
  isLinear = true;

  // Define separate form groups for better organization
  studentFormGroup!: FormGroup;
  guardianFormGroup!: FormGroup;
  addressFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _snackBar:MatSnackBar) {}

  ngOnInit() {
    // Initialize Student Form
    this.studentFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      grade: ['', Validators.required],
    });

    // Initialize Guardian Form
    this.guardianFormGroup = this._formBuilder.group({
      guardianName: ['', Validators.required],
      relationship: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]], // Simple regex for numbers
    });

    // Initialize Address Form
    this.addressFormGroup = this._formBuilder.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      zip: ['', Validators.required],
    });
  }
   openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  onSubmit() {
    if (
      this.studentFormGroup.valid &&
      this.guardianFormGroup.valid &&
      this.addressFormGroup.valid
    ) {
      // Combine data into one object
      const finalData = {
        student: this.studentFormGroup.value,
        guardian: this.guardianFormGroup.value,
        address: this.addressFormGroup.value,
      };

      console.log('Registration Data Submitted:', finalData);
      this.openSnackBar('Registration Successful!', 'Close');
    } else {
      alert('Please fill out all required fields.');
    }
  }
}
