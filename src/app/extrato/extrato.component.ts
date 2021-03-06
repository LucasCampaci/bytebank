import { Transferencia } from './../models/transferencia.model';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
 transferencias: any[];
  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {
    this.service.findAll().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias);
      this.transferencias = transferencias;
    });
  }
}
