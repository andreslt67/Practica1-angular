import { Injectable } from '@angular/core';
import { Joke } from './joke-class'

@Injectable({
  providedIn: 'root'
})
export class JokeListService {

  jokes: Joke[];

  constructor() { 
    this.jokes = [
      new Joke("What did the cheese say when it looked in the mirror?", "Hellome (Halloumi)"),
      new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
      new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’")
    ];
  }
  
  getJokeList() {
    return this.jokes;
  }

  addJoke(joke) {
    this.jokes.unshift(joke);
  }

  removeJoke(id) {
    this.jokes.splice(id, 1);
  }
}
