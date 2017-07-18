import { Injectable } from "@angular/core";
import { Http , Headers } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService{
    private username: string;
    private client_id = '1869f9bbe828dd700e76';
    private client_secret = '4c66eaaac2b564b941de2dc81e379f0ad6316f67';
       
       constructor(private _http:Http){
           console.log("Github service ready..");
           this.username= 'bradtraversy';
     }
     getUser(){
         return this._http.get('http://api.github.com/users/'+ this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
         .map( res => res.json() )
         
     }

       getRepos(){
         return this._http.get('http://api.github.com/users/'+ this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
         .map( res => res.json() )
         
     }

     updateUser(username:string){
         this.username = username;
     }
}

