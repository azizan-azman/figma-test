import { Component, OnInit } from '@angular/core';
import { didYouKnowData } from 'src/app/data-access/mock-data/did-you-know-data';
import { sidebarNavigationData } from 'src/app/data-access/mock-data/sidebar-navigation-data';
import { userAvatarData } from 'src/app/data-access/mock-data/user-avatar-data';
import { SidebarNavigation } from 'src/app/data-access/models/sidebar-navigation.model';

@Component({
  selector: 'app-shell-default',
  templateUrl: './shell-default.component.html',
  styleUrls: ['./shell-default.component.scss'],
})
export class ShellDefaultComponent implements OnInit {
  isSidebarCollapse = false;
  sidebarNavigations: SidebarNavigation[] = sidebarNavigationData;
  didYouKnowText: string = didYouKnowData;
  userAvatarName: string = userAvatarData;

  constructor() {}

  ngOnInit(): void {}

  toggleWidth() {
    this.isSidebarCollapse = !this.isSidebarCollapse;
  }
}
