import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  @Output() close = new EventEmitter<void>()
  @Output() taskData = new EventEmitter<any>()

  @Input() userId !: string

  public inPutTaskData !: { title: string, summary: string, date: Date, userId: string }
  enteredTitle !:string
  enteredSummary !: string
  enteredDate!: Date;

  ngOnInit(): void {
    // console.log(this.userId)
    this.inPutTaskData = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
      userId: this.userId
    }
    console.log('Input Data ', this.inPutTaskData)
  }


  onCancel() {
    this.close.emit()
  }
  onSubmit() {
    console.log(this.inPutTaskData)
    this.close.emit()
    this.taskData.emit(this.inPutTaskData)

  }
}
