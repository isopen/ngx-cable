import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Injectable()
export class Broadcaster {
  private _eventBus: any;

  constructor() {
    this.init();
  };

  private init() {
    this._eventBus = new Subject();
  };

  public broadcast(key, data) {
    this._eventBus.next({key: key, data: data});
  };

  public on(key) {
    return this._eventBus.asObservable()
      .filter(function (event) {
        return event.key === key;
      })
      .map(function (event) {
        return event.data;
      });
  };

  public off() {
    this.init();
  };
}
