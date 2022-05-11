import { Component, OnInit } from '@angular/core';
import {UsersChoiceService} from "../../services/users-choice.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  private clickedTopic: object = {};
  constructor(private userChoice: UsersChoiceService) { }

  ngOnInit() {
  }

  // TODO: add click logic (user shoudnt add twice the same topic)
  getTopic(event: any) {
    const topicValue = event.target.innerText;
    if (this.clickedTopic.hasOwnProperty(topicValue)) {
      event.target.style.backgroundColor = "";
    }else {

    }


  }

  listChoice() {
    const choiceList = this.userChoice.listUsersChoice();
    for (let i = 0; i < choiceList.length; i++) {
      console.log(choiceList[i]);
    }
  }

}
