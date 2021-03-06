import { Component, OnInit,Output,EventEmitter } from '@angular/core';import { Quote} from '../quote';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() emitQuote= new EventEmitter()
  quoteWords:any
  quoteEditor:any
  quoteAuthor:any
  quoteDate?:number
  theWords:any

  submitQuote(){
    this.theWords = new Quote(this.quoteEditor,this.quoteAuthor,this.quoteWords)
    this.quoteWords=''
    this.quoteAuthor=''
    this.quoteEditor=''
    this.emitQuote.emit(this.theWords)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
