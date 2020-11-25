import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Joke } from '../joke-class'
import { JokeListService } from '../joke-list-service.service';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {

  formJoke: FormGroup;

  //@Output() jokeCreated = new EventEmitter<Joke>(); output manda la broma al padre

   constructor(private jokelist: JokeListService) {}

  createJoke() {
    //this.jokeCreated.emit(new Joke(this.formJoke.controls.textSetup.value, this.formJoke.controls.textPunchline.value)); asi seria con output
    this.jokelist.addJoke(new Joke(this.formJoke.controls.textSetup.value, this.formJoke.controls.textPunchline.value));
  }

  ngOnInit(): void {
    this.formJoke = new FormGroup({
      textSetup: new FormControl('', [Validators.minLength(6), Validators.required]),
      textPunchline: new FormControl('', [Validators.minLength(6), Validators.required])
    });
  }

}
