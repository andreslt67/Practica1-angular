import { Component, OnInit } from '@angular/core';
import { Joke } from '../joke-class';
import { JokeListService } from '../joke-list-service.service'

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {
  
  jokes: Joke[];

  constructor(private jokelist: JokeListService) {
    this.jokes = this.jokelist.getJokeList();
  }

  ngOnInit(): void {
  }

}
