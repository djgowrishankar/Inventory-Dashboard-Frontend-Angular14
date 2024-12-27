import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      itemCode: ['', Validators.required],
      description: ['', Validators.required],
      stockSize: ['', Validators.required],
      category: ['', Validators.required],
      storesAvailability: ['', Validators.required],
      price: ['', Validators.required],
      photos: [null, Validators.required]
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
      // Handle form submission
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.productForm.patchValue({
      photos: file
    });
  }
}