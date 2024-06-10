import { FormResponse } from './../../models/Interfaces/Form.Response';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormService } from './../../services/form.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent implements OnInit{

  formsResponse! : FormResponse[];
  FormResponse! : FormResponse;
  name = new FormControl('Gabriel');
  updateName() {
    this.name.setValue('');
  }
  constructor (private FormService : FormService){}

    ngOnInit(): void {
      this.getForms();
    }

  getForms(): void{
    this.FormService.getForms().subscribe({
      next: (response)=> {
        response && (this.formsResponse = response)
        console.log(this.formsResponse);
      },
      error: (error)=> console.log(error),
    })
  }

  getFormPorId(name: string):void {
    this.FormService.getFormPorId(name).subscribe({
      next: (response)=>{
        response && (this.FormResponse = response);
        console.log(this.FormResponse);
      },
        error: (error)=> console.log(error),
    });
  }

}
