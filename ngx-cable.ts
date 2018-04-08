import { Injectable } from '@angular/core';
import * as ActionCable from 'actioncable';
import { Broadcaster } from './broadcaster';
import { isNullOrUndefined, isUndefined } from "util";

@Injectable()
export class NgXCable {
  constructor(
    private broadcaster: Broadcaster
  ) {
  };
  public setCable = function(url: string) {
    this.cable = ActionCable.createConsumer(url);
  };
  public connect = function(url: string) {
    this.setCable(url);
  };
  public isOpen = function() {
    if(!isUndefined(this.cable)) {
      return !this.cable.connection.disconnected;
    }else {
      return false;
    }
  };
  public create = function(params: {channel: string, room: string}) {
    let _this = this;
    return this.cable.subscriptions.create(params, {
      received: function (data: any) {
        _this.broadcaster.broadcast(params.channel, data);
      }
    });
  };
  public subscribe = function(params: {channel: string, room: string}) {
    return this.create(params);
  };
  public send = function(data: any, subscriptions?: ActionCable.Subscription[]) {
    if(!this.isOpen()) {
      return false;
    }
    if(isNullOrUndefined(subscriptions)) {
      this.cable.subscriptions.subscriptions[0].send(data);
    }else if(subscriptions instanceof Array) {
      subscriptions.forEach(
        function(subscription) {
          if(subscription instanceof ActionCable.Subscription) {
            subscription.send(data);
          }
        }
      );
    }else {
      return false;
    }
    return true;
  };
  public perform = function(action: string, data: any, subscriptions?: ActionCable.Subscription[]) {
    if(!this.isOpen()) {
      return false;
    }
    if(isNullOrUndefined(subscriptions)) {
      this.cable.subscriptions.subscriptions[0].perform(action, data);
    }else if(subscriptions instanceof Array) {
      subscriptions.forEach(
        function(subscription) {
          if(subscription instanceof ActionCable.Subscription) {
            subscription.perform(action, data);
          }
        }
      );
    }else {
      return false;
    }
    return true;
  };
  public unsubscribe = function(subscriptions?: ActionCable.Subscription[]) {
    let _this = this;
    if(isNullOrUndefined(subscriptions)) {
      this.cable.subscriptions.subscriptions.forEach(
        function (subscription) {
          _this.cable.subscriptions.remove(subscription);
        }
      );
    }else if(subscriptions instanceof Array) {
      subscriptions.forEach(
        function (subscription) {
          if(subscription instanceof ActionCable.Subscription) {
            _this.cable.subscriptions.remove(subscription);
          }
        }
      );
    }else {
      return false;
    }
    return true;
  };
  public getSubscriptions = function() {
    return this.cable.subscriptions.subscriptions;
  };
  public getCountSubscriptions = function() {
    return this.getSubscriptions().length;
  };
  public searchSubcriptions = function(id, field = 'room') {
    let rsub = [];
    this.getSubscriptions().forEach(
      function(subscription) {
        const msg = JSON.parse(subscription.identifier);
        if(id === msg[field]) {
          rsub.push(subscription);
        }
      }
    );
    return rsub;
  };
  public reject = function(subscription: ActionCable.Subscription) {
    if(subscription instanceof ActionCable.Subscription) {
      this.cable.subscriptions.remove(subscription);
    }else {
      return false;
    }
    return true;
  };
  public disconnect = function() {
    if(this.isOpen()) {
      this.cable.disconnect();
    }else {
      return false;
    }
  };
}
