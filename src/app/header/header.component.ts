import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationService } from '../side-nav/side-nav.navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  constructor(private navService: NavigationService) { }

  ngOnInit(): void {
  }

  toggleSideNav() {
    this.navService.setShowNav(true);
  }

}