import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-usersTasks';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  
  public user = DUMMY_USERS
  @Input() testId!: string
  @Input() userName!: string
  @Output() addTask = new EventEmitter<Boolean>()
  @Input() isAddTask1 !: Boolean
  @Output() closeTask= new EventEmitter<void>() 
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];
  ngOnInit(): void {
    // console.log(this.isAddTask1)
  }
  get userTasks() {
    return this.tasks.filter((x) => x.userId === this.testId)
  }
  onSelectingAdd() {
    // console.log('true1')
    this.addTask.emit()
  }
  onCancel() {
    this.isAddTask1= false
    this.closeTask.emit()
    // console.log(this.isAddTask1)
  }
  addTaskData(data: {title:string, summary: string,date: string, userId: string}){
    // console.log('Adding data ', data.userId)
      this.tasks.push({
        id: new Date().getTime().toString(),
        userId: data.userId,
        title: data.title,
        summary: data.summary,
        dueDate: data.date
      })
  }

}
