import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  personal: any;
  user!: string;
  repos: any;


  constructor(private githubservice: GithubService) {

    

  }
  
  findUser() {
    this.githubservice.findUserName(this.user)
    

    this.githubservice.getPersonalInfo().subscribe((personal: any) => {

      this.personal = personal; 
    });
    this.githubservice.getRepos().subscribe((repos: any) => {
      console.log(repos);
      this.repos=repos;
    });    
  }  
  ngOnInit(): void {
  }

}