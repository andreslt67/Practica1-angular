import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Joke } from '../joke-form/joke-form.component';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  @Input('joke') data: Joke;

  @Output() JokeSelected = new EventEmitter<Joke>();

  selectJoke(id) {
    this.JokeSelected.emit(this.data)
  }
  

  ngOnInit(): void {
  }

}
