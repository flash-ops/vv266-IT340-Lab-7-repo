import { Component, OnInit } from '@angular/core'; // Import OnInit
import { ApiService } from './api.service'; // Import ApiService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { // Implement OnInit
  title = 'mean-stack-frontend';
  message: string = ''; // New variable to hold the backend message

  constructor(private apiService: ApiService) {} // Inject ApiService

  ngOnInit(): void {
    this.apiService.getMessage().subscribe(response => {
      this.message = response; // Store the backend response
    });
  }
}
