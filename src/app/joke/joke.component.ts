import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Joke } from '../joke-class';
import { JokeListService } from '../joke-list-service.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  @Input('joke') data: Joke;

  //@Output() JokeSelected = new EventEmitter<Joke>() output que envia la broma al padre;

  constructor(private jokelist: JokeListService) {}

  DeleteJoke() {
    //this.JokeSelected.emit(this.data) asi con output
    this.jokelist.removeJoke(this.data)
  }
  

  ngOnInit(): void {
  }

}
