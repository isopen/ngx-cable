import { Injectable } from '@angular/core';
import * as ActionCable from 'actioncable';
import { Broadcaster } from './broadcaster';

@Injectable()
export class NgXCable {
    constructor(
        private broadcaster: Broadcaster
    ) {
        this.broadcaster = new Broadcaster();
    };
    public setCable = function(url) {
        this.cable = ActionCable.createConsumer(url);
    };
    public create = function(params) {
        return this.cable.subscriptions.create(params, <ActionCable.CreateMixin>{
            received: function (data) {
                this.broadcaster.broadcast(params.channel, data);
            }
        });
    };
    public send = function(data) {
        this.subscription.send(data);
    };
    public perform = function(action, data) {
        this.subscription.perform(action, data);
    };
    public unsubscribe = function() {
        let _this = this;
        this.cable.subscriptions.subscriptions.forEach(
            function(subscription) {
                _this.cable.subscriptions.remove(subscription);
            }
        );
    }
};