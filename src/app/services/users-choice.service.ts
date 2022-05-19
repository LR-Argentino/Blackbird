import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersChoiceService {
  private usersChoice: string[] = [];

  constructor() { }

  addToChoice(choice: string): void {
    this.usersChoice.push(choice);
  }

  listUsersChoice(): string[] {
    return this.usersChoice;
  }
}
