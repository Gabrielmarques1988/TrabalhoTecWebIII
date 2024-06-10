import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { FormsComponent } from "./componente/forms/forms.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FormsComponent]
})
export class AppComponent implements OnInit{
  title = 'reativeform';

  ngOnInit(): void {
    initFlowbite
  }
}
