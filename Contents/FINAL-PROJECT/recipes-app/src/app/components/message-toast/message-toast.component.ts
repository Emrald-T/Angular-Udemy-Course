import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-message-toast',
  templateUrl: './message-toast.component.html',
  styleUrls: ['./message-toast.component.css']
})
export class MessageToastComponent implements OnInit {
  message = '';
  constructor(private msgService: MessageService) { }

  ngOnInit(): void {
    this.msgService.messageAvailable
      .subscribe(
        (message: string) => {
          this.message = message;
          // Auto remove message after 4 seconds to to hide the component
          setTimeout(() => {
            this.message = '';
          }, 4000);
        }
      );
  }
}
