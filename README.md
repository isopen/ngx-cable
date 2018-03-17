> <h1>NgX-Cable</h1>

> Integrate ActionCable into your application.

Install
-----------------------------------
npm install actioncable --save<br>
npm install ngx-cable --save

Examples
-----------------------------------
<a href="https://goo.gl/sMmKpC" target="_blank">angular</a><br>
<a href="https://github.com/isopen/examples-ngx-cable/blob/master/ionic/src/app/app.component.ts" target="_blank">ionic</a><br>
<a href="https://github.com/isopen/soc/blob/master/frontend/src/app/page/page.service.ts" target="_blank">send message</a>

Cable API
-----------------------------------
#### setCable(url: string), connect(url: string)
<pre>
Connect to channel
</pre>

#### isOpen()
<pre>
Сhecking connection status
</pre>

#### create(params: {channel: string, room: string}), subscribe(params: {channel: string, room: string})<br>
<pre>
Create a channel subscription
</pre>

#### send(data: any, subscriptions?: ActionCable.Subscription[])<br>
<pre>
Send message to subscribers
</pre>

#### perform(action: string, data: any, subscriptions?: ActionCable.Subscription[])<br>
<pre>
Send message to subscribers
</pre>

#### unsubscribe(subscriptions?: ActionCable.Subscription[])<br>
<pre>
Unsubscribe from subscriptions
</pre>

#### reject(subscription: ActionCable.Subscription)<br>
<pre>
Unsubscribe from the subscription
</pre>

#### getSubscriptions()
<pre>
Get active Subscriptions
</pre>

#### searchSubcriptions(id: int, room: string)
<pre>
Search for a subscription
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
