import {Component, Input, AfterViewInit, AfterContentInit, Output, QueryList, ContentChildren, EventEmitter, ViewChild, ElementRef, OnInit, Renderer2} from '@angular/core';
import {NgStyle} from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../../app.service';
import {FormsModule} from '@angular/forms';
import { OrgProfile } from '../../settings/modal/org-profile/OrgProfile';
import { Site } from '../../settings/modal/sites/Site';
import { UserDetail } from '../../interface/UserDetail';

@Component({
    selector: 'modal-overlay',
    styleUrls: ['./modal-overlay.component.css'],
    templateUrl: './modal-overlay.component.html'
})
export class ModalOverlayComponent implements OnInit,AfterViewInit{
   
    
    step:number=1;
    orgProfile:OrgProfile=new OrgProfile();
    site:Site=new Site();


    @ViewChild('indicator') indicator: ElementRef;
    @ViewChild('f') form: any;
    get height():number {
        return window.document.body.clientHeight;
    }
    get width():number {
        return window.document.body.clientWidth;
    }

    constructor(private router:Router,private renderer: Renderer2,private _appService:AppService,private _route:ActivatedRoute,private appService: AppService) {
        document.documentElement.style.overflow = 'hidden';
        // document.body.scroll = "no";
     }

  ngOnInit() {
    this._route.fragment.subscribe((fragment: string) => {
      if(fragment!=null){
          var eachParam = fragment.split('&');
          let token;
          let user:UserDetail;
          for (var i = 0; i < eachParam.length; i++) {
            var param = eachParam[i].split('=');
            if ('access_token' === param[0]) {
              token = param[1];
            }else if('detail' === param[0]){
              user = JSON.parse(param[1]);
            }else if('authorities' === param[0]){
              user.authorities = param[1];
            }
          }
          this._appService.saveToken(token);
          this._appService.setUser(user);
      }
      
    });
    this._appService.checkCredentials();
    this.setup();
  }
  setup(){
    this.appService.getCommunication('/check_setup').subscribe(response =>{
        console.log("Response    :  "+response.responseResult._DATA.isSetupCompleted);
        if(response.responseResult._DATA.isSetupCompleted){
            this.appService.setUser(response.responseResult._DATA);
            console.log("---->   "+JSON.stringify(this.appService.getUser()));
            this.router.navigate(['dashboard']);
        }
      },error => console.log(error));
  }
    ngAfterViewInit(): void {
       // 
    }

    ngOnDelete() {
        document.documentElement.style.overflow = 'auto';
        // document.body.scroll = "yes";
    }
    next(step){
        this.step = step;
        
        this.indicator.nativeElement.querySelectorAll('a').forEach((item) => {
            
            if(item.id == this.getStep()){
                item.disabled='';
            }
          });
        
       
    }

    setStep(step):void{
        this.step = step;
    }
    
    getStep():any{
        return this.step;
    }
    private newMethod() {
        return this;
    }
  
    columnDefs:any[]=[
        {headerName: "Site Name", property: "displayName",width:50},
        {headerName: "Contact No.", property: "displayName",width:50},
        {headerName: "Email Address", property: "displayName",width:50}
    ];

    submit(){
        let appInitParams = {
            orgDTO:this.orgProfile,
            siteDTO:this.site
        };
        console.log(JSON.stringify(appInitParams));
        this.appService.serverComunication('/setup',appInitParams).subscribe(response =>{
            if(response.responseResult._DATA.isSetupCompleted){
                this.appService.setUser(response.responseResult._DATA);
                console.log("---->   "+JSON.stringify(this.appService.getUser()));
                this.router.navigate(['dashboard']);
            }
          },error => console.log(error));
        
        // this.form.reset();
    }
    addSite(){

    }
}
