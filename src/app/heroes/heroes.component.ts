import { Component, OnInit, SimpleChanges } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }  
  
  primitiveNumbers = [1, 2, 3, 5, 7, 11, 13, 17, 19]

  ngOnInit() {
    console.log("HeroesComponent ngOnInit")
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("HeroesComponent ngOnChanges: ", changes)
  }

  ngDoCheck() {
    console.log("HeroesComponent ngDoCheck")
  }

  ngAfterContentInit() {
    console.log("HeroesComponent ngAfterContentInit")
  }

  ngAfterContentChecked() {
    console.log("HeroesComponent ngAfterContentChecked")
  }

  ngAfterViewInit() {
    console.log("HeroesComponent ngAfterViewInit")
  }

  ngAfterViewChecked() {
    console.log("HeroesComponent ngAfterViewChecked")
  }

  ngOnDestroy() {
    console.log("HeroesComponent ngOnDestroy")
  }

}
