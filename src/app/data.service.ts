import { Injectable } from '@angular/core';
import {Baby} from "./entities/baby";
import {Sitter} from "./entities/sitter";

@Injectable()
export class DataService {

  private babies: Baby[] = [
    {firstName: 'Jens',
      postalCode: '2860',
      picture: 'no picture',
      age: 19,
      gender: 'Male'
    },
    {firstName: 'Ulrik',
      postalCode: '2860',
      picture: 'no picture',
      age: 12,
      gender: 'Female'
    },
    {firstName: 'Yvonne',
      postalCode: '2860',
      picture: 'no picture',
      age: 14,
      gender: 'Female'
    },
    {firstName: 'Arne',
      postalCode: '2860',
      picture: 'no picture',
      age: 17,
      gender: 'Male'
    }
  ];

  private sitters: Sitter[] = [
    {firstname: 'Hans',
      lastname: 'Henriksen',
      age: 24,
      yearsOfExperience: 2,
      region: 'Copenhagen',
      picture: 'No picture',
      gender: 'male',
      phone: '28739624'
    },
    {firstname: 'Hans',
      lastname: 'Henriksen',
      age: 24, yearsOfExperience: 2,
      region: 'Copenhagen',
      picture: 'No picture',
      gender: 'male',
      phone: '28739624'
    },
    {firstname: 'Hans',
      lastname: 'Henriksen',
      age: 24,
      yearsOfExperience: 2,
      region: 'Copenhagen',
      picture: 'No picture',
      gender: 'male',
      phone: '28739624'
    },
    {firstname: 'Hans',
      lastname: 'Henriksen',
      age: 24,
      yearsOfExperience: 2,
      region: 'Copenhagen',
      picture: 'No picture',
      gender: 'male',
      phone: '28739624'
    },
    {firstname: 'Hans',
      lastname: 'Henriksen',
      age: 24,
      yearsOfExperience: 2,
      region: 'Copenhagen',
      picture: 'No picture',
      gender: 'male',
      phone: '28739624'
    }
  ]

  constructor() { }

  addBaby(baby: Baby){
    this.babies.push(baby);
    console.log(this.babies)
  }

  addSitter(sitter: Sitter){
    this.sitters.push(sitter);
    console.log(this.sitters)
  }

  getBabies(){
    return this.babies;
  }

  getSitters(){
    return this.sitters;
  }
}
