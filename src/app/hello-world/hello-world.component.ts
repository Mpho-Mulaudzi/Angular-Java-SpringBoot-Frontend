import { Component, OnInit } from '@angular/core';

import { HelloworldService } from '../helloworld.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit{
  greeting: any;

  constructor(private helloworldService: HelloworldService){

  }
  ngOnInit(): void {
    console.log("something to display")
    this.helloworldService.getHelloWorld().subscribe(data =>{
      this.greeting = data;
      console.log("data", this.greeting)


  }
    )



  }

}
