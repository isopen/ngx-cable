#### requires
<pre>
<code>
git clone <a href="https://github.com/isopen/ngx-cable">https://github.com/isopen/ngx-cable.git</a>
cd ngx-cable
npm i -g webpack-cli webpack<br>
npm i ts-loader rxjs angular util @angular/core uglifyjs-webpack-plugin typescript webpack actioncable
</code>
</pre>
#### requires a peer
<pre>
<code>
npm install zone.js@^0.8.4
</code>
</pre>
#### assembly command
<pre>
<code>
webpack
</code>
</pre>
#### pay attention to this
<pre>
<code>
<a href=https://nodesecurity.io/advisories/612>npm audit</a>
Probably you will need to fix your package-lock.json
(find package deep-extend and replace the version with 0.5.1) and run npm i deep-extend@0.5.1
</code>
</pre>
