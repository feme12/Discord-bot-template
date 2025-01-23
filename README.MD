# Discord bot template.
- Base setup for a discord bot using `discord.js` `dotenv` and `commandkit`
- Made by [feme12](https://discord.com/users/696158716617031711) & [goldmen1131](https://discord.com/users/634140757812314114)

# Setup
- Run this command to install all packages. ``npm i``
- Go into `example.env` file and rename it to `.env` and add your discord bot token. Ex: `TOKEN=MTE3NTE5NjE0MTMxMTIzMDAzMw.G8BOqk.ZvqEW9vhS4YNMJQVKLDTO4INbdq87FJ3JRLzBY`

# Guild Manager
- Used to lockdown your bot to only certain discord servers.
- You can edit the `config.js` to your likeing.
- You can change `enabled` to `true` to use it or to `false` to not use it.
- You can add guilds like this `["GUILD1ID", "GUILD2ID"]`
- You can add users like this too `["USERID1", "USERID2"]`
```js
export const guild_manager = {
    "enabled": false,
    "guilds": [""],
    "users": [""]
}
```

# Command Template `src/commands/template.js`
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

# Event Template `src/events/ready/template.js`
```js
/** * @param {import('discord.js').Client} client */
export default (client) => {
    console.log(`${client.user.tag} is online!`.green);
}
```

# Validations Template `src/validations/template.js`
```js
module.exports = ({ interaction, commandObj, handler }) => {
  if (interaction.user.id === '123123123123123' ) { // Check there user id.
    interaction.reply({
      content: "You are not allowed to run commands.",
      ephemeral: true,
    });

    return true; // True to make it not execute the command. And false to make it execute the command.
  }
};
```