import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RefreshService } from './refresh-service/refresh.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  constructor(
    private router: Router, 
    private refreshService: RefreshService
  ){}

  ngOnInit() {
    if (this.refreshService.isRefresh()) {
      this.router.navigate(['/layout']);
    }
  }
}
