import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
    (<any>window).loading_screen = (<any>window).pleaseWait({
      logo: 'assets/musiclogo.png',
      backgroundColor: '#222629',
      loadingHTML:'<i class="fas fa-spinner"></i>'

    });

    setTimeout(() => {
      (<any>window).loading_screen.finish();
    }, 3000);
    
}

}

// this.http.get ('http://localhost:4200/home')
// .subscribe ((response:any)) => 'all'{
//   console.log(response);
// }

//   rockClick(){
//     this.currentIframe = this.iframeList[0];
//   }

//   popClick(){
//     this.currentIframe = this.iframeList[1];
//   }
// }


