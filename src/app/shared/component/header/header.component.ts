import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../service/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userName?: string;
  userRole?: string;

  constructor(private storageService: StorageService) {
    this.storageService.getName().subscribe((name) => {
      this.userName = name;
    });

    this.storageService.getRole().subscribe((role) => {
      this.userRole = role;
    });

  }

  ngOnInit(): void {
    this.userName = this.storageService.getProperty('name');
    this.userRole = this.storageService.getProperty('role');
  }

  logout() {
    this.storageService.clearCookie();
  }
}
