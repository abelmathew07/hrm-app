import { NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgClass,RouterOutlet],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent{
  isSidebarOpen = false;
  isLargeScreen = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isLargeScreen = window.innerWidth >= 992;
    if (this.isLargeScreen) {
      this.isSidebarOpen = true;
    }
  }

  ngOnInit() {
    this.isLargeScreen = window.innerWidth >= 992;
    if (this.isLargeScreen) {
      this.isSidebarOpen = true;
    }
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}