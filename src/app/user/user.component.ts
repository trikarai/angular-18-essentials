import { Component, computed, signal } from '@angular/core';

import { DUMMY_USERS } from './dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randomIndex]);

  onUserSelect() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
    // Alternatively, you can use the following line if you prefer not to use signal:
    // this.selectedUser = DUMMY_USERS[randomIndex];
  }

  ImagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
}
