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
    public create = function(params) {
        let _this = this;
        return this.cable.subscriptions.create(params, {
            received: function (data: any) {
                _this.broadcaster.broadcast(params.channel, data);
            }
        });
    };
    public send = function(data) {
        this.cable.subscriptions.subscriptions[0].send(data);
    };
    public perform = function(action, data) {
        this.cable.subscriptions.subscriptions[0].perform(action, data);
    };
    public unsubscribe = function() {
        let _this = this;
        this.cable.subscriptions.subscriptions.forEach(
            function(subscription) {
                _this.cable.subscriptions.remove(subscription);
            }
        );
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
