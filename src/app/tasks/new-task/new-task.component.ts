import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit{
 
  @Output() close = new EventEmitter<void>()
  @Output() taskData = new EventEmitter<any>()
  @Input() userId !: string
  ngOnInit(): void {
    // console.log(this.userId)
  }
  enteredTitle = '';
  enteredSummary = '';
  enteredDate!:Date;
  inPutTaskData = {
    title: this.enteredTitle,
    summary: this.enteredSummary,
    date: this.enteredDate,
    userId: this.userId
  }
  onCancel() {
    this.close.emit()
  }
  onSubmit() {
    // console.log(this.inPutTaskData)
    this.close.emit()
    this.taskData.emit(this.inPutTaskData)
   
  }
}
