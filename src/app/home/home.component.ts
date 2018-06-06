import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../_theme/loader.css']
})
export class HomeComponent implements OnInit {
  public loader = true;
  public arrayLengths = [0];
  public currentState = {
    genre: '',
    index: 0
  }
  // this is my rock list. my array. my songs n shit.
  public rockList = [
    {
      genre: 'rock',
      code: 'https://open.spotify.com/embed/track/06CDvHPv4UERdZh3HgdSVR',
      desc: 'German rock.',
      active: true,
    },
    {
      genre: 'rock',
      code: 'https://open.spotify.com/embed/track/6yT8VHN9CRAdN98AcSuXrC',
      desc: 'Portugese rock.',
      active: true,
    },{
      genre: 'rock',
      code: 'https://open.spotify.com/embed/track/1LgLwbD4kr8BUUVVQiOilJ',
      desc: 'Polish rock.',
      active: true,
    }, {
      genre: 'rock',
      code: 'https://open.spotify.com/embed/track/5OOjWcbvaz4xRPzPT3SRbB',
      desc: 'Arabic rock.',
      active: true,
    }, {
      genre: 'rock',
      code: 'https://open.spotify.com/embed/track/79LK3TdjrbKJ01nLQQUhNm',
      desc: 'Vietnamese rock.',
      active: true,
    }, {
      genre: 'rock',
      code: 'https://open.spotify.com/embed/track/0hzih5wPuGN8tCIZ16puJx',
      desc: 'Hindi rock.',
      active: true,
    }, {
      genre: 'rock',
      code: 'https://open.spotify.com/embed/track/0Xpx55K6XNvG6UaaCFFMRg',
      desc: 'Ukrainian rock.',
      active: true,
    }, {
      genre: 'rock',
      code: 'https://open.spotify.com/embed/track/0pE1GWpJXgxekLS8HpNSUF',
      desc: 'Russian rock.',
      active: true,
    }, {
      genre: 'rock',
      code: 'https://open.spotify.com/embed/track/13QdFgXNUiQCrOQAyhAMJ5',
      desc: 'Taiwanese rock.',
      active: true,
    }, {
      genre: 'rock',
      code: 'https://open.spotify.com/embed/track/4tzBMHc3mpriH1o4xkc73L',
      desc: 'Italian rock.',
      active: true,
    }, {
      genre: 'rock',
      code: 'https://open.spotify.com/embed/track/5UV2oqgMXvlkOvvtK3aT7f',
      desc: 'Turkish rock.',
      active: true,
    }, {
      genre: 'rock',
      code: 'https://open.spotify.com/embed/track/4948HMiT2gNgNPw0YFk5Iw',
      desc: 'French rock.',
      active: true,
    }, {
      genre: 'rock',
      code: 'https://open.spotify.com/embed/track/7wnL7ZrXYvuguw6rkU2kFM',
      desc: 'Thai rock.',
      active: true,
    }, {
      genre: 'rock',
      code: 'https://open.spotify.com/embed/track/6hnh21ByxLZtoNejXB0vm3',
      desc: 'Mandarin rock.',
      active: true,
    }, {
      genre: 'rock',
      code: 'https://open.spotify.com/embed/track/2vy13V3EyUrA2onQqveEUO',
      desc: 'Serbian rock.',
      active: true,
    }, {
      genre: 'rock',
      code: 'https://open.spotify.com/embed/track/4MdKI8sKykyDGEhR0ftYms',
      desc: 'Punjabi rock.',
      active: true,
    }, {
      genre: 'rock',
      code: 'https://open.spotify.com/embed/track/4mydBcsS18KQ0r00MBjCb2',
      desc: 'Nepali rock.',
      active: true,
    }, {
      genre: 'rock',
      code: 'https://open.spotify.com/embed/track/14sASuxNYZcaf22CAi2PDa',
      desc: 'Albaian rock.',
      active: true,
    }, {
      genre: 'rock',
      code: 'https://open.spotify.com/embed/track/1aJuTRimOdtR1zrp8lkaZH',
      desc: 'Korean rock.',
      active: true,
    }, {
      genre: 'rock',
      code: 'https://open.spotify.com/embed/track/5WESvrjEQaqqBBHCbJSJ9a',
      desc: 'Hebrew rock.',
      active: true,
    }, {
      genre: 'rock',
      code: 'https://open.spotify.com/embed/track/2OVf2RsvRD9u4bNfS4CjXK',
      desc: 'Persian rock',
      active: true,
    }, {
      genre: 'rock',
      code: 'https://open.spotify.com/embed/track/2XMmOtr2BzKLzKhavtRuN3',
      desc: 'Magyar (Hungarian) rock.',
      active: true,
    }, {
      genre: 'rock',
      code: 'https://open.spotify.com/embed/track/5dsSuEqfqHkF6PIv9aWKnl',
      desc: 'Icelandic rock.',
      active: true,
    }, {
      genre: 'rock',
      code: 'https://open.spotify.com/embed/track/1kuVZPFiELg5INaZn3WYRb',
      desc: 'Greek rock.',
      active: true,
    }, {
      genre: 'rock',
      code: 'https://open.spotify.com/embed/track/1O8mEmJ2o7H7dn44Ciu69b',
      desc: 'Armenian rock.',
      active: true,
    }, {
      genre: 'rock',
      code: 'https://open.spotify.com/embed/track/41JWtYY2O7c1b0QYHoyDp9',
      desc: 'Estonian rock.',
      active: true,
    }, {
      genre: 'rock',
      code: 'https://open.spotify.com/embed/track/7lZqKaKCN4UUEDz2thRz7b',
      desc: 'Croatian rock. ',
      active: true,
    }, {
      genre: 'rock',
      code: 'https://open.spotify.com/embed/track/4L5skRFhx3LKxTVjppGt1X',
      desc: 'Swahili rock.',
      active: true,
    }, {
      genre: 'rock',
      code: 'https://open.spotify.com/embed/track/3jmA82yv7zXAFNxl2ru79E',
      desc: 'Quechuan rock.',
      active: true,
    }, {
      genre: 'rock',
      code: 'https://open.spotify.com/embed/track/6FG2MKdiWdNq68P9FX6fl9',
      desc: 'Guatamalan (Spanish) rock.',
      active: true,
    }, {
      genre: 'rock',
      code: 'https://open.spotify.com/embed/track/2qArs0oCrKHjqsDdCNzrIE',
      desc: 'Bulgarian rock.',
      active: true,
    },
  ]
  // now this in my r&b list.
  public rbList = [
    {
      genre: 'rb',
      code: 'https://open.spotify.com/embed/track/5Nzrol1S9iKYwXt11CjM2n',
      desc: 'German R&B.',
      active: true,
    },
    {
      genre: 'rb',
      code: 'https://open.spotify.com/embed/track/23XuOU5Rw8ebOfkjdHNcdq',
      desc: 'Portugese R&B.',
      active: true,
    },{
      genre: 'rb',
      code: 'https://open.spotify.com/embed/track/4LJH1v57LgRMaBCOdFi6wH',
      desc: 'Polish R&B.',
      active: true,
    }, {
      genre: 'rb',
      code: 'https://open.spotify.com/embed/track/75efLRFoIacLFfmta3JFRE',
      desc: 'Arabic R&B.',
      active: true,
    }, {
      genre: 'rb',
      code: 'https://open.spotify.com/embed/track/6hUpxEKFSjS8metuA1yxlf',
      desc: 'Vietnamese R&B.',
      active: true,
    }, {
      genre: 'rb',
      code: 'https://open.spotify.com/embed/track/0iqMd2eiG2C9fcn0BSNjF3',
      desc: 'Hindi R&B.',
      active: true,
    }, {
      genre: 'rb',
      code: 'https://open.spotify.com/embed/track/71qLfizBxmVMpC1lypzb39',
      desc: 'Ukrainian R&B.',
      active: true,
    }, {
      genre: 'rb',
      code: 'https://open.spotify.com/embed/track/1zjBktP27i2Pw3fqB8xqBf',
      desc: 'Russian R&B.',
      active: true,
    }, {
      genre: 'rb',
      code: 'https://open.spotify.com/embed/track/0PGE113c5GSaSKr5XaWoYl',
      desc: 'Taiwanese R&B.',
      active: true,
    }, {
      genre: 'rb',
      code: 'https://open.spotify.com/embed/track/6VXisUdPxLHWbN9lkTuqK8',
      desc: 'Italian R&B.',
      active: true,
    }, {
      genre: 'rb',
      code: 'https://open.spotify.com/embed/track/5Y3ZTBwRNrgj3AlXYASvDe',
      desc: 'Turkish R&B.',
      active: true,
    }, {
      genre: 'rb',
      code: 'https://open.spotify.com/embed/track/5hd14zjV9q4Wv7WFqONuB7',
      desc: 'French R&B.',
      active: true,
    }, {
      genre: 'rb',
      code: 'https://open.spotify.com/embed/track/72bifeUJaxwOtGjGiVqAeB',
      desc: 'Thai R&B.',
      active: true,
    }, {
      genre: 'rb',
      code: 'https://open.spotify.com/embed/track/451Rl2WeL1LiYZzPiv8X7A',
      desc: 'Mandarin R&B.',
      active: true,
    }, {
      genre: 'rb',
      code: 'https://open.spotify.com/embed/track/7lClRKRi2A4hwaTmXlfZFv',
      desc: 'Serbian R&B.',
      active: true,
    }, {
      genre: 'rb',
      code: 'https://open.spotify.com/embed/track/32LKwbmh6yVsWoRRF8DIvf',
      desc: 'Punjabi R&B.',
      active: true,
    },{
      genre: 'rb',
      code: 'https://open.spotify.com/embed/track/5r9Vh2GjUD4TptEZvhWTA1',
      desc: 'Albanian R&B.',
      active: true,
    }, {
      genre: 'rb',
      code: 'https://open.spotify.com/embed/track/3LHiCD2avTbHVWb9FRMy7c',
      desc: 'Korean R&B.',
      active: true,
    }, {
      genre: 'rb',
      code: 'https://open.spotify.com/embed/track/4Z4nBKM1cCmTTcj95a2RcE',
      desc: 'Hebrew R&B.',
      active: true,
    }, {
      genre: 'rb',
      code: 'https://open.spotify.com/embed/track/6Lp3XPGAMc4T98CW71zVfG',
      desc: 'Persian R&B',
      active: true,
    }, {
      genre: 'rb',
      code: 'https://open.spotify.com/embed/track/6wkoTYifxW8s23SgEtP63C',
      desc: 'Magyar (Hungarian) R&B',
      active: true,
    }, {
      genre: 'rb',
      code: 'https://open.spotify.com/embed/track/1BwrZ8tZ3sN7cMqDoQ91hd',
      desc: 'Icelandic R&B.',
      active: true,
    }, {
      genre: 'rb',
      code: 'https://open.spotify.com/embed/track/7L0izGzp9W85naH8QUBYe2',
      desc: 'Greek R&B',
      active: true,
    }, {
      genre: 'rb',
      code: 'https://open.spotify.com/embed/track/1dmDBcwQffiuxdOI8w7pLR',
      desc: 'Armenian R&B.',
      active: true,
    }, {
      genre: 'rb',
      code: '',
      desc: 'Estonian R&B.',
      active: true,
    }, {
      genre: 'rb',
      code: '',
      desc: 'Croatian R&B. ',
      active: true,
    }, {
      genre: 'rb',
      code: '',
      desc: 'Swahili R&B.',
      active: true,
    }, {
      genre: 'rb',
      code: '',
      desc: 'Quechuan R&B.',
      active: true,
    }, {
      genre: 'rb',
      code: '',
      desc: 'Guatamalan (Spanish) R&B',
      active: true,
    }, {
      genre: 'rb',
      code: '',
      desc: 'Bulgarian R&B',
      active: true,
    },
  ]

  public currentIframe = {
    genre: '',
    code: '',
    active: false
  };

  // this is my rock click button thing
  rockClick(){
    console.log(this.currentState.index);
    if( this.currentState.genre != 'rock'){
      this.currentState.genre = 'rock';
      this.currentIframe = this.rockList[0];
    }else{
      this.currentState.index = this.currentState.index + 1;
      
      if(this.currentState.index === this.rockList.length){
        this.currentState.index = 0;
      }

      console.log(this.currentState.index);
      this.currentIframe = this.rockList[this.currentState.index];
    }
  }
  // Now onto my r&b list. 
  rbClick(){
    console.log(this.currentState.index);
    if( this.currentState.genre != 'r&b'){
      this.currentState.genre = 'r&b';
      this.currentIframe = this.rbList[0];
    }else{
      this.currentState.index = this.currentState.index + 1;
      
      if(this.currentState.index === this.rbList.length){
        this.currentState.index = 0;
      }

      console.log(this.currentState.index);
      this.currentIframe = this.rbList[this.currentState.index];
    }
  }





  // this is my loading screen.
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

    this.calcLengths();

  }

  calcLengths(){
    this.arrayLengths[0] = this.rockList.length;
  }
    // this.http.get ('http://localhost:4200/home')
    // .subscribe ((response:any)) => 'all'{
    //   console.log(response);
    // }
}