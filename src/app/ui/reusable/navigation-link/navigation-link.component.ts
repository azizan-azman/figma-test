import { Component, Input } from '@angular/core';
import { SidebarNavigation } from 'src/app/data-access/models/sidebar-navigation.model';

@Component({
  selector: 'app-navigation-link',
  templateUrl: './navigation-link.component.html',
  styleUrls: ['./navigation-link.component.scss'],
})
export class NavigationLinkComponent {
  @Input() sidebarNavigations!: SidebarNavigation[];
  @Input() isSidebarCollapse!: boolean;
}
