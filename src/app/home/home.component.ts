import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../_theme/loader.css']
})
export class HomeComponent implements OnInit {
  public changeBackground = false;
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
      desc: 'German Rock.',
      flag: 'assets/images/WRLD.png',
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
      // flag: 'asssets/'
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
    },{
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
    // now this in my rap list.
    public rapList = [
      {
        genre: 'rap',
        code: 'https://open.spotify.com/embed/track/6Ry0yBrx43cBlgkSJ5v9Rd',
        desc: 'German Rap.',
        active: true,
      },{
        genre: 'rap',
        code: 'https://open.spotify.com/embed/track/7vgNGxchhqDQWjKjLPTPro',
        desc: 'Portugese Rap.',
        active: true,
      },{
        genre: 'rap',
        code: 'https://open.spotify.com/embed/track/5AiZAl1zyM1DW2ANspOjFg',
        desc: 'Polish Rap.',
        active: true,
      }, {
        genre: 'rap',
        code: 'https://open.spotify.com/embed/track/2v34KNVUnkIX80NsASvhZK',
        desc: 'Arabic Rap.',
        active: true,
      }, {
        genre: 'rap',
        code: 'https://open.spotify.com/embed/track/3pOkmFi5UCjVYDcIJ5fsoy',
        desc: 'Vietnamese Rap.',
        active: true,
      }, {
        genre: 'rap',
        code: 'https://open.spotify.com/embed/track/7r5YX0RtOQ3mM27WSbUFvP',
        desc: 'Hindi Rap.',
        active: true,
      }, {
        genre: 'rap',
        code: 'https://open.spotify.com/embed/track/6jtcu0aWtnAjCxPgebjhWY',
        desc: 'Ukrainian Rap.',
        active: true,
      }, {
        genre: 'rap',
        code: 'https://open.spotify.com/embed/track/0MoO1Glg9D4l3aAbUYGKD8',
        desc: 'Russian Rap.',
        active: true,
      }, {
        genre: 'rap',
        code: 'https://open.spotify.com/embed/track/72uecKUw0CCGWZCP7tzT0y',
        desc: 'Taiwanese Rap.',
        active: true,
      }, {
        genre: 'rap',
        code: 'https://open.spotify.com/embed/track/093RgZ7RXHZwIrxZhZYX4Q',
        desc: 'Italian Rap.',
        active: true,
      }, {
        genre: 'rap',
        code: 'https://open.spotify.com/embed/track/1VNHyFYkNXY1mhOqrpEvYT',
        desc: 'Turkish Rap.',
        active: true,
      }, {
        genre: 'rap',
        code: 'https://open.spotify.com/embed/track/0suTGmqnLzlVRWyjOjyw2C',
        desc: 'French Rap.',
        active: true,
      }, {
        genre: 'rap',
        code: 'https://open.spotify.com/embed/track/6q26d5CzA9aagFRhEiMyMd',
        desc: 'Thai Rap.',
        active: true,
      }, {
        genre: 'rap',
        code: 'https://open.spotify.com/embed/track/1z3KPocyJO3WEOgJTKmajH',
        desc: 'Mandarin Rap.',
        active: true,
      }, {
        genre: 'rap',
        code: 'https://open.spotify.com/embed/track/2wEwwmIKTK6RCmH1F7wNjp',
        desc: 'Serbian Rap.',
        active: true,
      }, {
        genre: 'rap',
        code: 'https://open.spotify.com/embed/track/6MRuNaMaH65vGyek33fXMV',
        desc: 'Punjabi Rap.',
        active: true,
      },{
        genre: 'rap',
        code: 'https://open.spotify.com/embed/track/2UT8xTS5r0lWTyCmdIfJMT',
        desc: 'Albanian Rap.',
        active: true,
      }, {
        genre: 'rap',
        code: 'https://open.spotify.com/embed/track/4mGMdtaVIwKRB8pblnPWCF',
        desc: 'Korean Rap.',
        active: true,
      }, {
        genre: 'rap',
        code: 'https://open.spotify.com/embed/track/3hv6T6xuDW6c9uuTNHayx7',
        desc: 'Hebrew Rap.',
        active: true,
      }, {
        genre: 'rap',
        code: 'https://open.spotify.com/embed/track/7qmWQlk6sTGxFYNnw78ZH6',
        desc: 'Persian Rap',
        active: true,
      }, {
        genre: 'rap',
        code: 'https://open.spotify.com/embed/track/2SGOTyqJcOnskDuKrENGVv',
        desc: 'Magyar (Hungarian) Rap',
        active: true,
      }, {
        genre: 'rap',
        code: 'https://open.spotify.com/embed/track/1BwrZ8tZ3sN7cMqDoQ91hd',
        desc: 'Icelandic Rap.',
        active: true,
      }, {
        genre: 'rap',
        code: 'https://open.spotify.com/embed/track/7L0izGzp9W85naH8QUBYe2',
        desc: 'Greek Rap',
        active: true,
      }, {
        genre: 'rap',
        code: 'https://open.spotify.com/embed/track/1dmDBcwQffiuxdOI8w7pLR',
        desc: 'Armenian Rap.',
        active: true,
      }, {
        genre: 'rap',
        code: 'https://open.spotify.com/embed/track/7FCnqHlYRs2RcnMcBRlj5a',
        desc: 'Croatian Rap. ',
        active: true,
      }, {
        genre: 'rap',
        code: 'https://open.spotify.com/embed/track/5n4uYhHyaVJ8QBRF4WFn0R',
        desc: 'Swahili Rap.',
        active: true,
      }, {
        genre: 'rap',
        code: 'https://open.spotify.com/embed/track/5IRBWRvuAHxELkJrt2QlTr',
        desc: 'Quechuan Rap.',
        active: true,
      }, {
        genre: 'rap',
        code: 'https://open.spotify.com/embed/track/3V5YcSq5p8hdJUIt7NvgeB',
        desc: 'Bulgarian Rap',
        active: true,
      },
    ]
    // now this in my jazz list.
    public jazzList = [
      {
        genre: 'jazz',
        code: 'https://open.spotify.com/embed/track/33dTn2q6GQXGQAbd9EnZsJ',
        desc: 'Hindi Jazz.',
        active: true,
      },{
        genre: 'jazz',
        code: 'https://open.spotify.com/embed/track/7vgNGxchhqDQWjKjLPTPro',
        desc: 'Portugese Jazz.',
        active: true,
      },{
        genre: 'jazz',
        code: 'https://open.spotify.com/embed/track/5AiZAl1zyM1DW2ANspOjFg',
        desc: 'Polish Jazz.',
        active: true,
      }, {
        genre: 'jazz',
        code: 'https://open.spotify.com/embed/track/2v34KNVUnkIX80NsASvhZK',
        desc: 'Arabic Jazz.',
        active: true,
      }, {
        genre: 'jazz',
        code: 'https://open.spotify.com/embed/track/3pOkmFi5UCjVYDcIJ5fsoy',
        desc: 'Vietnamese Jazz.',
        active: true,
      }, {
        genre: 'jazz',
        code: 'https://open.spotify.com/embed/track/7r5YX0RtOQ3mM27WSbUFvP',
        desc: 'Hindi Jazz.',
        active: true,
      }, {
        genre: 'jazz',
        code: 'https://open.spotify.com/embed/track/6jtcu0aWtnAjCxPgebjhWY',
        desc: 'Ukrainian Jazz.',
        active: true,
      }, {
        genre: 'jazz',
        code: 'https://open.spotify.com/embed/track/0MoO1Glg9D4l3aAbUYGKD8',
        desc: 'Russian Jazz.',
        active: true,
      }, {
        genre: 'jazz',
        code: 'https://open.spotify.com/embed/track/72uecKUw0CCGWZCP7tzT0y',
        desc: 'Taiwanese Jazz.',
        active: true,
      }, {
        genre: 'jazz',
        code: 'https://open.spotify.com/embed/track/093RgZ7RXHZwIrxZhZYX4Q',
        desc: 'Italian Jazz.',
        active: true,
      }, {
        genre: 'jazz',
        code: 'https://open.spotify.com/embed/track/1VNHyFYkNXY1mhOqrpEvYT',
        desc: 'Turkish Jazz.',
        active: true,
      }, {
        genre: 'jazz',
        code: 'https://open.spotify.com/embed/track/0suTGmqnLzlVRWyjOjyw2C',
        desc: 'French Jazz.',
        active: true,
      }, {
        genre: 'jazz',
        code: 'https://open.spotify.com/embed/track/6q26d5CzA9aagFRhEiMyMd',
        desc: 'Thai Jazz.',
        active: true,
      }, {
        genre: 'jazz',
        code: 'https://open.spotify.com/embed/track/1z3KPocyJO3WEOgJTKmajH',
        desc: 'Mandarin Jazz.',
        active: true,
      }, {
        genre: 'jazz',
        code: 'https://open.spotify.com/embed/track/2wEwwmIKTK6RCmH1F7wNjp',
        desc: 'Serbian Jazz.',
        active: true,
      }, {
        genre: 'jazz',
        code: 'https://open.spotify.com/embed/track/6MRuNaMaH65vGyek33fXMV',
        desc: 'Punjabi Jazz.',
        active: true,
      },{
        genre: 'jazz',
        code: 'https://open.spotify.com/embed/track/2UT8xTS5r0lWTyCmdIfJMT',
        desc: 'Albanian Jazz.',
        active: true,
      }, {
        genre: 'jazz',
        code: 'https://open.spotify.com/embed/track/4mGMdtaVIwKRB8pblnPWCF',
        desc: 'Korean Jazz.',
        active: true,
      }, {
        genre: 'jazz',
        code: 'https://open.spotify.com/embed/track/3hv6T6xuDW6c9uuTNHayx7',
        desc: 'Hebrew Jazz.',
        active: true,
      }, {
        genre: 'jazz',
        code: 'https://open.spotify.com/embed/track/7qmWQlk6sTGxFYNnw78ZH6',
        desc: 'Persian Jazz',
        active: true,
      }, {
        genre: 'jazz',
        code: 'https://open.spotify.com/embed/track/2SGOTyqJcOnskDuKrENGVv',
        desc: 'Magyar (Hungarian) Jazz',
        active: true,
      }, {
        genre: 'jazz',
        code: 'https://open.spotify.com/embed/track/1BwrZ8tZ3sN7cMqDoQ91hd',
        desc: 'Icelandic Jazz.',
        active: true,
      }, {
        genre: 'jazz',
        code: 'https://open.spotify.com/embed/track/7L0izGzp9W85naH8QUBYe2',
        desc: 'Greek Jazz.',
        active: true,
      }, {
        genre: 'jazz',
        code: 'https://open.spotify.com/embed/track/1dmDBcwQffiuxdOI8w7pLR',
        desc: 'Armenian Jazz.',
        active: true,
      }, {
        genre: 'jazz',
        code: 'https://open.spotify.com/embed/track/7FCnqHlYRs2RcnMcBRlj5a',
        desc: 'Croatian Jazz. ',
        active: true,
      }, {
        genre: 'jazz',
        code: 'https://open.spotify.com/embed/track/5n4uYhHyaVJ8QBRF4WFn0R',
        desc: 'Swahili Jazz.',
        active: true,
      }, {
        genre: 'jazz',
        code: 'https://open.spotify.com/embed/track/5IRBWRvuAHxELkJrt2QlTr',
        desc: 'Quechuan Jazz.',
        active: true,
      }, {
        genre: 'jazz',
        code: 'https://open.spotify.com/embed/track/3V5YcSq5p8hdJUIt7NvgeB',
        desc: 'Bulgarian Jazz.',
        active: true,
      },
    ]
    // now this in my rap list.
    public folkList = [
      {
        genre: 'folk',
        code: 'https://open.spotify.com/embed/track/6nmZENPqrHx1SzQOKE8INt',
        desc: 'Hindi Folk.',
        active: true,
      },{
        genre: 'folk',
        code: 'https://open.spotify.com/embed/track/7vgNGxchhqDQWjKjLPTPro',
        desc: 'Portugese Folk.',
        active: true,
      },{
        genre: 'folk',
        code: 'https://open.spotify.com/embed/track/5AiZAl1zyM1DW2ANspOjFg',
        desc: 'Polish Folk.',
        active: true,
      }, {
        genre: 'folk',
        code: 'https://open.spotify.com/embed/track/2v34KNVUnkIX80NsASvhZK',
        desc: 'Arabic Folk.',
        active: true,
      }, {
        genre: 'folk',
        code: 'https://open.spotify.com/embed/track/3pOkmFi5UCjVYDcIJ5fsoy',
        desc: 'Vietnamese Folk.',
        active: true,
      }, {
        genre: 'folk',
        code: 'https://open.spotify.com/embed/track/7r5YX0RtOQ3mM27WSbUFvP',
        desc: 'Hindi Folk.',
        active: true,
      }, {
        genre: 'folk',
        code: 'https://open.spotify.com/embed/track/6jtcu0aWtnAjCxPgebjhWY',
        desc: 'Ukrainian Folk.',
        active: true,
      }, {
        genre: 'folk',
        code: 'https://open.spotify.com/embed/track/0MoO1Glg9D4l3aAbUYGKD8',
        desc: 'Russian Folk.',
        active: true,
      }, {
        genre: 'folk',
        code: 'https://open.spotify.com/embed/track/72uecKUw0CCGWZCP7tzT0y',
        desc: 'Taiwanese Folk.',
        active: true,
      }, {
        genre: 'folk',
        code: 'https://open.spotify.com/embed/track/093RgZ7RXHZwIrxZhZYX4Q',
        desc: 'Italian Folk.',
        active: true,
      }, {
        genre: 'folk',
        code: 'https://open.spotify.com/embed/track/1VNHyFYkNXY1mhOqrpEvYT',
        desc: 'Turkish Folk.',
        active: true,
      }, {
        genre: 'folk',
        code: 'https://open.spotify.com/embed/track/0suTGmqnLzlVRWyjOjyw2C',
        desc: 'French Folk.',
        active: true,
      }, {
        genre: 'folk',
        code: 'https://open.spotify.com/embed/track/6q26d5CzA9aagFRhEiMyMd',
        desc: 'Thai Folk.',
        active: true,
      }, {
        genre: 'folk',
        code: 'https://open.spotify.com/embed/track/1z3KPocyJO3WEOgJTKmajH',
        desc: 'Mandarin Folk.',
        active: true,
      }, {
        genre: 'folk',
        code: 'https://open.spotify.com/embed/track/2wEwwmIKTK6RCmH1F7wNjp',
        desc: 'Serbian Folk.',
        active: true,
      }, {
        genre: 'folk',
        code: 'https://open.spotify.com/embed/track/6MRuNaMaH65vGyek33fXMV',
        desc: 'Punjabi Folk.',
        active: true,
      },{
        genre: 'folk',
        code: 'https://open.spotify.com/embed/track/2UT8xTS5r0lWTyCmdIfJMT',
        desc: 'Albanian Folk.',
        active: true,
      }, {
        genre: 'folk',
        code: 'https://open.spotify.com/embed/track/4mGMdtaVIwKRB8pblnPWCF',
        desc: 'Korean Folk.',
        active: true,
      }, {
        genre: 'folk',
        code: 'https://open.spotify.com/embed/track/3hv6T6xuDW6c9uuTNHayx7',
        desc: 'Hebrew Folk.',
        active: true,
      }, {
        genre: 'folk',
        code: 'https://open.spotify.com/embed/track/7qmWQlk6sTGxFYNnw78ZH6',
        desc: 'Persian Folk',
        active: true,
      }, {
        genre: 'folk',
        code: 'https://open.spotify.com/embed/track/2SGOTyqJcOnskDuKrENGVv',
        desc: 'Magyar (Hungarian) Folk',
        active: true,
      }, {
        genre: 'folk',
        code: 'https://open.spotify.com/embed/track/1BwrZ8tZ3sN7cMqDoQ91hd',
        desc: 'Icelandic Folk.',
        active: true,
      }, {
        genre: 'folk',
        code: 'https://open.spotify.com/embed/track/7L0izGzp9W85naH8QUBYe2',
        desc: 'Greek Folk.',
        active: true,
      }, {
        genre: 'folk',
        code: 'https://open.spotify.com/embed/track/1dmDBcwQffiuxdOI8w7pLR',
        desc: 'Armenian Folk.',
        active: true,
      }, {
        genre: 'folk',
        code: 'https://open.spotify.com/embed/track/7FCnqHlYRs2RcnMcBRlj5a',
        desc: 'Croatian Folk. ',
        active: true,
      }, {
        genre: 'folk',
        code: 'https://open.spotify.com/embed/track/5n4uYhHyaVJ8QBRF4WFn0R',
        desc: 'Swahili Folk.',
        active: true,
      }, {
        genre: 'folk',
        code: 'https://open.spotify.com/embed/track/5IRBWRvuAHxELkJrt2QlTr',
        desc: 'Quechuan Folk.',
        active: true,
      }, {
        genre: 'folk',
        code: 'https://open.spotify.com/embed/track/3V5YcSq5p8hdJUIt7NvgeB',
        desc: 'Bulgarian Folk.',
        active: true,
      },
    ]
    // now this in my pop list.
    public popList = [
      {
        genre: 'pop',
        code: 'https://open.spotify.com/embed/track/4zuthiRjgwbVdqLL2G5C3x',
        desc: 'Hindi Pop.',
        active: true,
      },{
        genre: 'pop',
        code: 'https://open.spotify.com/embed/track/7vgNGxchhqDQWjKjLPTPro',
        desc: 'Portugese Pop',
        active: true,
      },{
        genre: 'pop',
        code: 'https://open.spotify.com/embed/track/5AiZAl1zyM1DW2ANspOjFg',
        desc: 'Polish Pop.',
        active: true,
      }, {
        genre: 'pop',
        code: 'https://open.spotify.com/embed/track/2v34KNVUnkIX80NsASvhZK',
        desc: 'Arabic Pop.',
        active: true,
      }, {
        genre: 'pop',
        code: 'https://open.spotify.com/embed/track/3pOkmFi5UCjVYDcIJ5fsoy',
        desc: 'Vietnamese Pop.',
        active: true,
      }, {
        genre: 'pop',
        code: 'https://open.spotify.com/embed/track/7r5YX0RtOQ3mM27WSbUFvP',
        desc: 'Hindi Pop.',
        active: true,
      }, {
        genre: 'pop',
        code: 'https://open.spotify.com/embed/track/6jtcu0aWtnAjCxPgebjhWY',
        desc: 'Ukrainian Pop.',
        active: true,
      }, {
        genre: 'pop',
        code: 'https://open.spotify.com/embed/track/0MoO1Glg9D4l3aAbUYGKD8',
        desc: 'Russian Pop.',
        active: true,
      }, {
        genre: 'pop',
        code: 'https://open.spotify.com/embed/track/72uecKUw0CCGWZCP7tzT0y',
        desc: 'Taiwanese Pop.',
        active: true,
      }, {
        genre: 'pop',
        code: 'https://open.spotify.com/embed/track/093RgZ7RXHZwIrxZhZYX4Q',
        desc: 'Italian Pop.',
        active: true,
      }, {
        genre: 'pop',
        code: 'https://open.spotify.com/embed/track/1VNHyFYkNXY1mhOqrpEvYT',
        desc: 'Turkish Pop.',
        active: true,
      }, {
        genre: 'pop',
        code: 'https://open.spotify.com/embed/track/0suTGmqnLzlVRWyjOjyw2C',
        desc: 'French Pop.',
        active: true,
      }, {
        genre: 'pop',
        code: 'https://open.spotify.com/embed/track/6q26d5CzA9aagFRhEiMyMd',
        desc: 'Thai Pop.',
        active: true,
      }, {
        genre: 'pop',
        code: 'https://open.spotify.com/embed/track/1z3KPocyJO3WEOgJTKmajH',
        desc: 'Mandarin Pop.',
        active: true,
      }, {
        genre: 'pop',
        code: 'https://open.spotify.com/embed/track/2wEwwmIKTK6RCmH1F7wNjp',
        desc: 'Serbian Pop.',
        active: true,
      }, {
        genre: 'pop',
        code: 'https://open.spotify.com/embed/track/6MRuNaMaH65vGyek33fXMV',
        desc: 'Punjabi Pop.',
        active: true,
      },{
        genre: 'pop',
        code: 'https://open.spotify.com/embed/track/2UT8xTS5r0lWTyCmdIfJMT',
        desc: 'Albanian Pop.',
        active: true,
      }, {
        genre: 'pop',
        code: 'https://open.spotify.com/embed/track/4mGMdtaVIwKRB8pblnPWCF',
        desc: 'Korean Pop.',
        active: true,
      }, {
        genre: 'pop',
        code: 'https://open.spotify.com/embed/track/3hv6T6xuDW6c9uuTNHayx7',
        desc: 'Hebrew Pop.',
        active: true,
      }, {
        genre: 'pop',
        code: 'https://open.spotify.com/embed/track/7qmWQlk6sTGxFYNnw78ZH6',
        desc: 'Persian Pop',
        active: true,
      }, {
        genre: 'pop',
        code: 'https://open.spotify.com/embed/track/2SGOTyqJcOnskDuKrENGVv',
        desc: 'Magyar (Hungarian) Pop',
        active: true,
      }, {
        genre: 'pop',
        code: 'https://open.spotify.com/embed/track/1BwrZ8tZ3sN7cMqDoQ91hd',
        desc: 'Icelandic Pop.',
        active: true,
      }, {
        genre: 'pop',
        code: 'https://open.spotify.com/embed/track/7L0izGzp9W85naH8QUBYe2',
        desc: 'Greek Pop.',
        active: true,
      }, {
        genre: 'pop',
        code: 'https://open.spotify.com/embed/track/1dmDBcwQffiuxdOI8w7pLR',
        desc: 'Armenian Pop.',
        active: true,
      }, {
        genre: 'pop',
        code: 'https://open.spotify.com/embed/track/7FCnqHlYRs2RcnMcBRlj5a',
        desc: 'Croatian Pop. ',
        active: true,
      }, {
        genre: 'pop',
        code: 'https://open.spotify.com/embed/track/5n4uYhHyaVJ8QBRF4WFn0R',
        desc: 'Swahili Pop.',
        active: true,
      }, {
        genre: 'pop',
        code: 'https://open.spotify.com/embed/track/5IRBWRvuAHxELkJrt2QlTr',
        desc: 'Quechuan Pop.',
        active: true,
      }, {
        genre: 'pop',
        code: 'https://open.spotify.com/embed/track/3V5YcSq5p8hdJUIt7NvgeB',
        desc: 'Bulgarian Pop.',
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
    this.changeBackground =true;
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
// this is my rap click.
  rapClick(){
    console.log(this.currentState.index);
    if( this.currentState.genre != 'rap'){
      this.currentState.genre = 'rap';
      this.currentIframe = this.rapList[0];
    }else{
      this.currentState.index = this.currentState.index + 1;
      
      if(this.currentState.index === this.rapList.length){
        this.currentState.index = 0;
      }

      console.log(this.currentState.index);
      this.currentIframe = this.rapList[this.currentState.index];
    }
  }
  // this is my jazz click.
  jazzClick(){
    console.log(this.currentState.index);
    if( this.currentState.genre != 'jazz'){
      this.currentState.genre = 'jazz';
      this.currentIframe = this.jazzList[0];
    }else{
      this.currentState.index = this.currentState.index + 1;
      
      if(this.currentState.index === this.jazzList.length){
        this.currentState.index = 0;
      }

      console.log(this.currentState.index);
      this.currentIframe = this.jazzList[this.currentState.index];
    }
  }
   // this is my folk click.
   folkClick(){
    console.log(this.currentState.index);
    if( this.currentState.genre != 'folk'){
      this.currentState.genre = 'folk';
      this.currentIframe = this.folkList[0];
    }else{
      this.currentState.index = this.currentState.index + 1;
      
      if(this.currentState.index === this.folkList.length){
        this.currentState.index = 0;
      }

      console.log(this.currentState.index);
      this.currentIframe = this.folkList[this.currentState.index];
    }
  }

  // this is my pop click.
  popClick(){
    console.log(this.currentState.index);
    if( this.currentState.genre != 'pop'){
      this.currentState.genre = 'pop';
      this.currentIframe = this.popList[0];
    }else{
      this.currentState.index = this.currentState.index + 1;
      
      if(this.currentState.index === this.popList.length){
        this.currentState.index = 0;
      }

      console.log(this.currentState.index);
      this.currentIframe = this.popList[this.currentState.index];
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