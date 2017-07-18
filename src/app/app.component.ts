import { Component } from '@angular/core';
import { ProfileComponent } from "./components/profile.component";
import { GithubService } from "./services/github.service";
import {  } from "@angular/http";
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [GithubService]
})
export class AppComponent  { }
