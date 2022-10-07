import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero?: Hero;
  @Input() clearSelected!: () => void;

  event : string = "";

  onClickAlert() : void{
    console.log("alert");
    alert(this.hero?.name + " says " + this.event || "Hello world");
  }

  onChangeInput(event : any) : void {
    console.log("event ", (<HTMLInputElement>event.target).value);
    this.event = event.target.value;
  }

  onClickClose() : void {
    console.log("Heor:", this.hero);
    this.clearSelected();
  }

  getColor() : string { 
    return '#123987'
  }
  
  ngOnInit(): void {
  }

}
