# neuviii-discord.js-self

> **⚠️ WARNING**: Using this library with a user account violates Discord's Terms of Service and may result in an account ban. Use at your own risk.

## About

`neuviii-discord.js-self` is a maintained fork of **discord.js-selfbot-v13** (based on `discord.js@13.17` with backports from `discord.js@14.21.0`). It provides a self‑bot client for Node.js (>=20.18).

## Installation
```bash
npm install neuviii-discord.js-self@latest
```

## Quick Example
```js
const { Client } = require('neuviii-discord.js-self');
const client = new Client();

client.on('ready', () => {
  console.log(`${client.user.username} is ready!`);
});

client.login('YOUR_TOKEN');
```

## Features
- Message handling
- ClientUser status & activity management
- Guild fetching, member handling, join/leave
- Interactions: slash commands, buttons, modals
- Captcha & TOTP support
- Voice & video (experimental)

## Documentation & Help
- Docs: https://discordjs-self-v13.netlify.app/

## Credits
- **discord.js** – https://github.com/discordjs/discord.js
- **discord.js-selfbot-v13** – https://github.com/aiko-chan-ai/discord.js-selfbot-v13 (original project)
- **neuviii** – author of this fork

---
*The author assumes no responsibility for any account bans caused by using this library.*

## I'd recommend anyone checking this repo to use to actually not use this and use the original discord.js-selfbot-v13 as I've only done minor changes that i thought would help, its not anything better or cooler.