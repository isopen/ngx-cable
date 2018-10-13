> <h1>NgX-Cable</h1>
> Integrate ActionCable into your application.

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

Read
-----------------------------------
http://edgeguides.rubyonrails.org/action_cable_overview.html
