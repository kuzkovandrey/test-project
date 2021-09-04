import {Component, OnInit} from "@angular/core";
import {UserService} from "../core/services/user.service";
import {User} from "../core/models/user.model";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-about-user',
  templateUrl: './about-user.component.html',
  styleUrls: ['./about-user.component.scss']
})
export class AboutUserComponent implements OnInit{

  username = ''
  firstName = ''
  lastName = ''

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUserInfo().subscribe(
      (user: User) => {
        this.username = user.username
        this.firstName = <string>user.firstName
        this.lastName = <string>user.lastName
      },

      (error: HttpErrorResponse) => {
        console.log(error)
      }
    )

  }
}
