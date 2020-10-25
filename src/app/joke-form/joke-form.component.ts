import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export class Joke {
  public setup: String;
  public punchline: String;
  public hide: boolean;

  constructor(setup: String, punchline: String) {
    this.setup = setup;
    this.punchline = punchline;
    this.hide = true;
  }

  toggle() {
    this.hide = !this.hide;
  }
}

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {

  @Output() jokeCreated = new EventEmitter<Joke>();

  createJoke(setup: String, punchline: String) {
    this.jokeCreated.emit(new Joke(setup, punchline));
  }

  ngOnInit(): void {
  }

}
