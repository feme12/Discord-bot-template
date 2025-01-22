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