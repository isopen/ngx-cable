![build success](https://img.shields.io/teamcity/codebetter/bt428.svg)
![npm 5.6](https://img.shields.io/npm/v/npm.svg)

> Integrate ActionCable into your Angular application.

Install
-----------------------------------
npm install actioncable --save<br>
npm install ngx-cable --save

Example
-----------------------------------
https://goo.gl/sMmKpC

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
    
Ngx-cable API
-----------------------------------

setCable(url) or alias connect(url)

create(params) or alias subscribe(params)

send(data) or send(data, subscriptions)

perform(action, data) or send(action, data, subscriptions)

unsubscribe() or unsubscribe(subscriptions)

getSubscriptions()

reject(subscription)

disconnect()

Listener API
-----------------------------------

on(key)

broadcast(key, data)

Read
-----------------------------------
http://edgeguides.rubyonrails.org/action_cable_overview.html
