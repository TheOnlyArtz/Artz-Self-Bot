### Artz-Self-Bot
A powerful selfbot made with hydrabolt's library (discord.js v11.1)
<> by ♥ from TheOnlyArtz, This bot is very basic including only 8 commands
but you will see way more soon,

### How Do I Use It?
Well, when it comes to **Self Bot** that means you need to supply
Your own account's token in, so How are we going to do that?
Simply open Discord and press `f12` in the browser on discordapp.com then go to 'Application' and
At the buttom you will see Token category and please **Dont sure this token with someone**
Sharing you token will be pure pain since you cannot regenerate it...
Now after you got the secret token Go ahead and open `private.json.example`
take down the `.example` from the name and inside the file put your token

```js
{
  "token" : "YourSuperSecretHere"
}
```

Inside app.js you will find the message event or look for something like
if (message.author.id !== "numbers") return;
Now these numbers are my ID but change the numbers to your ID
for example
```js
if (message.author.id !== "277518204224405505") return;
```

**`AND THATS IT , YOU ARE GOOD TO GO`**
### LICENSE
MIT License

Copyright (c) 2017 Amit Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
