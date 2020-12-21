import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-serverss]',
  selector:'.app-serverss',
  templateUrl: './serverss.component.html',
  styleUrls: ['./serverss.component.css']
})
export class ServerssComponent implements OnInit {
  allowNewServer = false
  serverCreation = "No server is created!"
  serverName = "Test Server"

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true
    },2000)
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreation = "Server was created! " + this.serverName
  }
  onUpdateServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value
  }
}
