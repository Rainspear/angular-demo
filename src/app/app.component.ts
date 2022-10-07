import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  input = "User"

  onChangeInput = (e : HTMLInputElement) => { 
    console.log(e.formTarget)
  }

  constructor() { }

  
  ngOnInit() {
    // console.log("AppComponent ngOnInit")
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log("AppComponent ngOnChanges: ", changes)
  // }

  // ngDoCheck() {
  //   console.log("AppComponent ngDoCheck")
  // }

  // ngAfterContentInit() {
  //   console.log("AppComponent ngAfterContentInit")
  // }

  // ngAfterContentChecked() {
  //   console.log("AppComponent ngAfterContentChecked")
  // }

  // ngAfterViewInit() {
  //   console.log("AppComponent ngAfterViewInit")
  // }

  // ngAfterViewChecked() {
  //   console.log("AppComponent ngAfterViewChecked")
  // }

  // ngOnDestroy() {
  //   console.log("AppComponent ngOnDestroy")
  // }
}
