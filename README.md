> <h1>NgX-Cable</h1> <img src="https://camo.githubusercontent.com/10f9fa2b4f264bed89d63d9317fc52ca2918858c/68747470733a2f2f6465766469762e76697375616c73747564696f2e636f6d2f5f617069732f7075626c69632f6275696c642f646566696e6974696f6e732f30626462633539302d613036322d346333662d623066362d3933383366363738363565652f353236312f6261646765" />

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
