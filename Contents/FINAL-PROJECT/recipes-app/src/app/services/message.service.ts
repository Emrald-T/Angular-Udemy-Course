import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class MessageService {
    messageAvailable = new EventEmitter<string>();
}
