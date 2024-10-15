import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './header-data.model';
import { Component, Injectable } from '@angular/core';
import { RouterLink } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

 private _headerData = new BehaviorSubject<HeaderData> ({
    title : 'Início',
    icon : 'home',
    routerUrl : ''
  });

  constructor() { }

  get headerData() : HeaderData {
    return this._headerData.value;
  }

  set headerData(headerData : HeaderData) {
    this._headerData.next(headerData);
  }
}
