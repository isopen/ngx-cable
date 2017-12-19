![build success](https://img.shields.io/teamcity/codebetter/bt428.svg)

> Integrate ActionCable into your Angular application.

Install
-----------------------------------
npm install actioncable --save<br>
npm install ngx-cable --save

Example
-----------------------------------
https://goo.gl/sMmKpC

NgX-cable API
-----------------------------------
##### setCable(url) or alias connect(url)
<pre>
Connect to channel<br>
url - string
</pre>

##### create(params) or alias subscribe(params)<br>
<pre>
Create a channel subscription<br>
params = {
    channel: name_channel,
    room: name_room
};<br>
name_channel - string<br>
name_room - string
</pre>

##### send(data) or send(data, subscriptions)<br>
<pre>
Send message to subscribers<br>
data - object<br>
subscriptions - array
</pre>

##### perform(action, data) or send(action, data, subscriptions)<br>
<pre>
Send message to subscribers<br>
action - string<br>
data - object<br>
subscriptions - array consisting of ActionCable.Subscription
</pre>

##### unsubscribe() or unsubscribe(subscriptions)<br>
<pre>
Unsubscribe from subscriptions<br>
subscriptions - array consisting of ActionCable.Subscription
</pre>

##### reject(subscription)<br>
<pre>
Unsubscribe from the subscription<br>
subscription - ActionCable.Subscription
</pre>

##### getSubscriptions()
<pre>
Get active Subscriptions
</pre>

##### disconnect()
<pre>
Disconnect from channel
</pre>

Listener API
-----------------------------------

##### on(key)

##### broadcast(key, data)

Usage
-----------------------------------

 - Connect NgXCableModule into your app.module.ts:
    <pre>
    import { NgXCableModule } from 'ngx-cable';
    @NgModule({
        ...
        imports: [
            NgXCableModule
        ],
        ...
    })
    export class AppModule { }
    </pre>

 -  Connect to a service or component
    <pre>
    import { NgXCable, Broadcaster } from 'ngx-cable';
    @Component({
        ...
    })
    export class AppComponent {
      constructor(
        private ngcable: NgXCable,
        private broadcaster: Broadcaster
      ) {
                  
        this.broadcaster.on('ChatChannel')
          .subscribe(
            response => {
              console.log(response);
            }
          );
          
        this.ngcable.setCable(
          http://example.com/chat
        );
        
        const params = {
          channel: 'ChatChannel',
          room: 'test'
        };
          
        this.ngcable.create(params);
        
        params['channel'] = 'ChatChannel';
        params['room'] = 'test1';
        this.ngcable.create(params);
        
      }
    };
    </pre>

Read
-----------------------------------
http://edgeguides.rubyonrails.org/action_cable_overview.html
