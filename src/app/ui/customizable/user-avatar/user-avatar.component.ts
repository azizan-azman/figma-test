import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
})
export class UserAvatarComponent {
  @Input() isSidebarCollapse!: boolean;
  @Input() userName!: string;

  get userInitials(): string {
    let name = this.userName;
    let firstLetter = name.charAt(0);
    return firstLetter;
  }
}
