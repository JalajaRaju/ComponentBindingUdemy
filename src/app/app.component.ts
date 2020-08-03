import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  serverElements = [{type:'server', name: 'Test Server', content:'Server Content'},
                  {type:'blueprint',name:'BluePrint',content:'Blue print content!'}];

 OnServerCreated(serverData:{serverName:string,serverContent:string})
 {
this.serverElements.push({
  type:'server',
  name:serverData.serverName,
  content:serverData.serverContent});
 } 
 
 OnBlueprintCreated(serverData:{serverName:string,serverContent:string})
 {
  this.serverElements.push({
    type:'blueprint',
    name:serverData.serverName,
    content:serverData.serverContent});
 }

 OnDelete()
 {
   let len : number = this.serverElements.length;
    this.serverElements.splice(len-1,1);
 }


  
}
