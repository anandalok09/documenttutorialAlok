import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TutorialserviceService } from '../tutorialservice.service';
import { Console } from 'console';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() sideNavToggled= new EventEmitter<boolean>();
  @Output() sidenavebarrcontent= new EventEmitter<any>();
  menuStatus:boolean=false;
  constructor(private tuserv:TutorialserviceService) { }
  headers:any;
  ngOnInit(): void {
    this.tuserv.getHeaderList().subscribe((response: any) => { this.headers = response; },
    (error: any) => { console.log(error); });
  }
  SideNavToggle(){
    this.menuStatus=!this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
    }
    sideheadercontent(id:any){
      
      this.tuserv.getsideHeaderList(id).subscribe((response: any) => { this.sidenavebarrcontent.emit(response) ; },
      (error: any) => { console.log(error); });
      console.log("this is conslo data========");
    }  

}
