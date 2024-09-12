import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgClass, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgClass, RouterOutlet,RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  isSidebarOpen = false;
  isLargeScreen = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (isPlatformBrowser(this.platformId)) {
      // Check if running in the browser before accessing window
      this.isLargeScreen = window.innerWidth >= 992;
      // Control sidebar behavior based on screen size
      if (this.isLargeScreen) {
        this.isSidebarOpen = false;
      }
    }
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Check if running in the browser before accessing window
      this.isLargeScreen = window.innerWidth >= 992;
      if (this.isLargeScreen) {
        this.isSidebarOpen = false; // Set sidebar state based on screen size
      }
    }
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
