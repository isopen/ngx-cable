import { Injectable } from '@angular/core';
import * as ActionCable from 'actioncable';
import { Broadcaster } from './broadcaster';

@Injectable()
export class NgXCable {
    constructor(
        private broadcaster: Broadcaster
    ) {
    };
    public setCable = function(url) {
        this.cable = ActionCable.createConsumer(url);
    };
    public connect = function(url) {
        this.setCable(url);
    }
    public create = function(params) {
        let _this = this;
        return this.cable.subscriptions.create(params, {
            received: function (data: any) {
                _this.broadcaster.broadcast(params.channel, data);
            }
        });
    };
    public subscribe = function(params) {
        return this.create(params);
    };
    public send = function(data, subscriptions: any = false) {
        if(subscriptions == false) {
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
    public perform = function(action, data, subscriptions: any = false) {
        if(subscriptions == false) {
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
    public unsubscribe = function(subscriptions: any = false) {
        let _this = this;
        if(subscriptions == false) {
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
    public reject = function(subscription) {
        this.cable.subscriptions.remove(subscription);
    };
    public disconnect = function() {
        this.cable.disconnect();
    };
};
