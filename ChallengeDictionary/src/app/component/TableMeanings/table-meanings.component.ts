/* eslint-disable @typescript-eslint/no-empty-function */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { meanings } from 'app/services/DictionaryAPI/Types/wordResume';

@Component({
  selector: 'component-table-meanings',
  templateUrl: './table-meanings.component.html',
  styleUrls: ['./table-meanings.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableMeaningsComponent implements OnInit {

  @Input() meanings: meanings[];

  public interfacesTableColumns: string[] = [
    'expand',
    'speech',
  ];

  constructor() {}

  ngOnInit(): void {
    console.log(this.meanings);
  }

}
