import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../_theme/loader.css']
})
export class HomeComponent implements OnInit {
  public loader = true;
  public iframeList = [
    {
      genre: 'german',
      code: 'https://open.spotify.com/embed/track/7pvnUtzikWUp3DUxVAetbn',
      active: true,
    },
    {
      genre: 'german',
      code: '',
      active: true
    }
  ]

  public currentIframe = {
    genre: '',
    code: '',
    active: false
  };


  constructor(public http: HttpClient) { }
  // THIS IS A LIFE CYCLE HOOK, HAPPENS EVERYTIME A PAGE LOADS
  ngOnInit() {
    // (<any>window).loading_screen = (<any>window).pleaseWait({
    //   logo: '',
    //   backgroundColor: '#1db954',
    //   loadingHTML: '<div class="equalizer> </div>'

    // });

    setTimeout(() => {
      this.loader =false;
    }, 100);

  }
    // this.http.get ('http://localhost:4200/home')
    // .subscribe ((response:any)) => 'all'{
    //   console.log(response);
    // }
    
      rockClick(){
        this.currentIframe = this.iframeList[0];
      }
    
      popClick(){
        this.currentIframe = this.iframeList[1];
      }
}




