import { cpuUsage } from 'process';

import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: 'post-create.component.html',
  styleUrls: ['post-create.component.css']
})

export class PostCreateComponent{
  enteredContent = '';
  enteredTitle = '';
  @Output() postCreated = new EventEmitter();

  // tslint:disable-next-line:typedef
  onAddPost() {
    const post = {
      title: this.enteredTitle,
      content: this.enteredContent
    };
    this.postCreated.emit(post);
  }
}
