import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {RobotService} from "../services/robot.service";

@Component({
  selector: 'app-robot-server-stop',
  templateUrl: './robot-server-stop.component.html',
  styleUrls: ['./robot-server-stop.component.css']
})
export class RobotServerStopComponent implements OnInit {

  constructor(private robotService: RobotService) {
  }

  ngOnInit(): void {
    this.robotService.stopServer().then(
      response => { // Success
        console.log("server stopped!");
      },
      error => { // Error
      });
  }

}
