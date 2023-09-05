import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifComponent implements OnInit {

  @Input() imageUrl: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
