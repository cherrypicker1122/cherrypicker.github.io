import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../side-nav/side-nav.navigation.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-side-nav-content',
  templateUrl: './side-nav-content.component.html',
  styleUrls: ['./side-nav-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SideNavContentComponent implements OnInit {

  navItems = [
    { label: '정리', route: '/write'},
    { label: '-', route: '/daily-list'}
  ];

  showSideNav: Observable<boolean> | undefined;

  constructor(private router: Router,
    private navService: NavigationService) { }

  ngOnInit(): void {
    this.showSideNav = this.navService.getShowNav();

  }

  onNavigationSelection(navItem: any) {
    this.navService.setShowNav(false);
    //this.navService.setShowNav(false);
    this.router.navigate([navItem.route]);
  }

}