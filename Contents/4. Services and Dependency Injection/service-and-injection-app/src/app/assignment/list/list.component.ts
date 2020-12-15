import { Component, Input, OnInit } from '@angular/core';
import { StatusLogService } from '../status-log.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() title: string;
  @Input() items: {name: string, active: boolean}[];

  constructor(private statusSrv: StatusLogService) { }

  ngOnInit(): void {
  }

  onChangeStatus(index: number, active: boolean): void {
    this.statusSrv.changeStatus(index, active);
  }
}
