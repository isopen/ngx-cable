
> Integrate ActionCable into your Angular application.

Install
-----------------------------------
npm install actioncable --save<br>
npm install ngx-cable --save

Example
-----------------------------------
https://goo.gl/sMmKpC<br>
https://github.com/isopen/examples-ngx-cable

NgX-cable API
-----------------------------------
#### setCable(url: string), connect(url: string)
<pre>
Connect to channel<br>
</pre>

#### isOpen()
<pre>
Сhecking connection status
</pre>

#### create(params: {channel: string, room: string}), subscribe(params: {channel: string, room: string})<br>
<pre>
Create a channel subscription<br>
</pre>

#### send(data: any, subscriptions?: ActionCable.Subscription[])<br>
<pre>
Send message to subscribers<br>
</pre>

#### perform(action: string, data: any, subscriptions?: ActionCable.Subscription[])<br>
<pre>
Send message to subscribers<br>
</pre>

#### unsubscribe(subscriptions?: ActionCable.Subscription[])<br>
<pre>
Unsubscribe from subscriptions<br>
</pre>

#### reject(subscription: ActionCable.Subscription)<br>
<pre>
Unsubscribe from the subscription<br>
</pre>

#### getSubscriptions()
<pre>
Get active Subscriptions
</pre>

#### disconnect()
<pre>
Disconnect from channel
</pre>

Listener API
-----------------------------------

#### on(key)

#### broadcast(key, data)

#### off()

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
