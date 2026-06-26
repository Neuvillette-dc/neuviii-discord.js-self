<div align="center">
  <br />
  <p>
    <a href="https://discord.js.org"><img src="https://discord.js.org/static/logo.svg" width="546" alt="discord.js" /></a>
  </p>
</div>

> [!CAUTION]
> **The use of this module under a different name on NPM (or another source besides this Github) is not associated with this library.**
> **When using these libraries, you accept the risk of exposing your Discord Token.**

## About

<strong>Welcome to `neuviii-discord.js-self@v1.0`, an optimized and updated fork based on `discord.js-selfbot-v13@v3.7`, which is based on `discord.js@13.17` and backport `discord.js@14.21.0`</strong>

- neuviii-discord.js-self is a [Node.js](https://nodejs.org) module that allows user accounts to interact with the Discord API v9.


<div align="center">
  <p>
    <a href="https://www.npmjs.com/package/neuviii-discord.js-self"><img src="https://img.shields.io/npm/v/neuviii-discord.js-self.svg" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/neuviii-discord.js-self"><img src="https://img.shields.io/npm/dt/neuviii-discord.js-self.svg" alt="npm downloads" /></a>
  </p>
</div>

> [!WARNING]
> **I don't take any responsibility for blocked Discord accounts that used this module.**

> [!CAUTION]
> **Using this on a user account is prohibited by the [Discord TOS](https://discord.com/terms) and can lead to the account block.**

### <strong>[Document Website](https://discordjs-self-v13.netlify.app/)</strong>

### <strong>[Example Code](https://github.com/aiko-chan-ai/discord.js-selfbot-v13/tree/main/examples)</strong>

## Features (User)
- [x] Message
- [x] ClientUser: Status, Activity, RemoteAuth, etc.
- [X] Guild: Fetch Members, Join / Leave, Top emojis, etc.
- [X] Interactions: Slash Commands, Buttons, Menu, Modal.
- [X] Captcha & TOTP Handler
- [X] Documentation
- [x] Voice & Video
- [ ] Everything

## Installation

> [!NOTE]
> **Node.js 20.18.0 or newer is required**

```sh-session
npm install neuviii-discord.js-self@latest
```

## Example

```js
const { Client } = require('neuviii-discord.js-self');
const client = new Client();

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})

client.login('token');
```

## Get Token ?

- Based: [findByProps](https://discord.com/channels/603970300668805120/1085682686607249478/1085682686607249478)

<strong>Run code (Discord Console - [Ctrl + Shift + I])</strong>

```js
window.webpackChunkdiscord_app.push([
	[Symbol()],
	{},
	req => {
		if (!req.c) return;
		for (let m of Object.values(req.c)) {
			try {
				if (!m.exports || m.exports === window) continue;
				if (m.exports?.getToken) return copy(m.exports.getToken());
				for (let ex in m.exports) {
					if (m.exports?.[ex]?.getToken && m.exports[ex][Symbol.toStringTag] !== 'IntlMessagesProxy') return copy(m.exports[ex].getToken());
				}
			} catch {}
		}
	},
]);

window.webpackChunkdiscord_app.pop();
console.log('%cWorked!', 'font-size: 50px');
console.log(`%cYou now have your token in the clipboard!`, 'font-size: 16px');
```

## Contributing

- Before creating an issue, please ensure that it hasn't already been reported/suggested, and double-check the
[documentation](https://discordjs-self-v13.netlify.app/).  
- See [the contribution guide](https://github.com/discordjs/discord.js/blob/main/.github/CONTRIBUTING.md) if you'd like to submit a PR.

## Need help?
Github Discussion: [Here](https://github.com/neuviii/neuviii-discord.js-self/discussions)

## Credits
- [Discord.js](https://github.com/discordjs/discord.js)
- [aiko-chan-ai/discord.js-selfbot-v13](https://github.com/aiko-chan-ai/discord.js-selfbot-v13) - Original project this is based on

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=neuviii/neuviii-discord.js-self&type=Date)](https://star-history.com/#neuviii/neuviii-discord.js-self&Date)
