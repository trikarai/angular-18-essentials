import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({
    required: true,
  })
  avatar!: string;
  // avatar = input.required<string>();

  @Input({
    required: true,
  })
  name!: string;
  // name = input.required<string>();

  get imagePath(): string {
    return `assets/users/${this.avatar}`;
  }
  // imagePath = computed(() => `assets/users/${this.avatar()}`);

  onSelectUser() {
    console.log('User selected:', this.avatar);
  }
}
