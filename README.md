> <h1>NgX-Cable</h1>
> <img src="https://travis-ci.org/travis-ci/travis-web.svg?branch=master" /><br>
> Integrate ActionCable into your application.

Features
-----------------------------------
- <b>Easy to use:</b> You just need to install npm package <code>npm install ngx-cable --save</code>
- <b>Multi-frameworks:</b> You can use <code>NgX-Cable</code> in modern frameworks.
- <b>Multi-cable:</b> <code>NgX-Cable</code> allows to create multiple connections. In one connection can create multiple subscriptions. Allows you to send messages to multiple channels and to several subscriptions on channel.
- <b>Cross-platform:</b> <code>NgX-Cable</code> can be used on any platform that supports javascript.
- <b>Good support:</b> You can write a report at any time convenient for you.
- <b>Open source and secure:</b> You can read the code in the project repository and edit it for your tasks.
- <b>Freedom:</b> You can find the features on your own and expand opportunities as necessary.

Examples
-----------------------------------
<a href="https://goo.gl/sMmKpC" target="_blank">angular</a><br>
<a href="https://github.com/isopen/examples-ngx-cable/blob/master/ionic/src/app/app.component.ts" target="_blank">ionic</a><br>
<a href="https://github.com/isopen/soc/blob/master/frontend/src/app/page/page.service.ts" target="_blank">send message</a>

Install
-----------------------------------
npm install ngx-cable --save

Native build
-----------------------------------
<a href="https://github.com/isopen/ngx-cable/blob/master/out_dir/native_build.help.md">build instruction</a>

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

#### getCountSubscriptions()
<pre>
Get count Subscriptions
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
