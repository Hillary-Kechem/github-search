import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private username: string;
  private clienttoken: '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' | undefined;


  constructor(private httpClient: HttpClient) {
  
    this.username = "Hillary-Kechem";

  }
  getPersonalInfo() {
    return this.httpClient.get('https://api.github.com/users/'+this.username + "?client_token=" + this.clienttoken)
    .map((res: any) => {
      return res
  });
}

getRepos(){
  return this.httpClient.get('https://api.github.com/users/'+this.username + "/repos?client_token=" + this.clienttoken)
  .map((res: any) => {
    return res
});
}

findUserName(name: string){
  this.username=name
}
}