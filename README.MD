# 🤖 Discord Bot Template

- Base setup for a Discord bot using `discord.js`, `dotenv`, and `commandkit` 🚀
- Made by [feme12](https://discord.com/users/696158716617031711) & [goldmen1131](https://discord.com/users/634140757812314114) 👥

## 📦 Setup

- Run this command to install all packages: 
  ```bash
  npm i
  ```
- Go into the `example.env` file, rename it to `.env`, and add your Discord bot token. 
  Example: 
  ```
  TOKEN=MTE3NTE5NjE0MTMxMTIzMDAzMw.G8BOqk.ZvqEW9vhS4YNMJQVKLDTO4INbdq87FJ3JRLzBY
  ```

## 🛡️ Guild Manager

- Used to lock down your bot to only certain Discord servers.
- You can edit the `config.js` to your liking.
- Change `enabled` to `true` to use it or to `false` to disable it.
- You can add guilds like this: `["GUILD1ID", "GUILD2ID"]`
- You can add users like this too: `["USERID1", "USERID2"]`

```js
export const guild_manager = {
    "enabled": false,
    "guilds": [""],
    "users": [""]
}
```

## 📜 Command Template `src/commands/template.js`

```js
import { EmbedBuilder, SlashCommandBuilder, TextChannel } from 'discord.js';

/** @type {import('commandkit').CommandData}  */
export const data = new SlashCommandBuilder()
    .setName('template') // DO NOT HAVE SPACES OR CAPS!!!
    .setDescription('This is a template command.') // Description that shows up.

/**
 * @param {import('commandkit').SlashCommandProps} param0 
 */
export const run = async ({ interaction }) => {
    interaction.reply("Hello, this is a template command.")
};

/** @type {import('commandkit').CommandOptions} */
export const options = {
    // https://commandkit.js.org/typedef/CommandOptions  
};
```

## 🎉 Event Template `src/events/ready/template.js`

```js
/** * @param {import('discord.js').Client} client */
export default (client) => {
    console.log(`${client.user.tag} is online!`.green);
}
```

## ✅ Validations Template `src/validations/template.js`

```js
module.exports = ({ interaction, commandObj, handler }) => {
  if (interaction.user.id === '123123123123123' ) { // Check the user id.
    interaction.reply({
      content: "You are not allowed to run commands.",
      ephemeral: true,
    });

    return true; // True to prevent command execution, false to allow it.
  }
};
```

## 📜 License

This project is licensed under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.html) ✍️