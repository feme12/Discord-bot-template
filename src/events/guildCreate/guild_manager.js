// Imports
import { guild_manager } from '../../../config.js'

/**
 * @param {import('discord.js').Client} client
 */

// Main function.
export default (client) => {
    setTimeout(() => {
        if (guild_manager.enabled) { // Check whether the option is enabled.
            client.guilds.cache.forEach((guild) => { // Loop through all guilds on startup.
                // Check if the guild ID is in the whitelisted guilds.
                if (guild_manager.guilds.includes(guild.id)) return; // Return if the guild is whitelisted.
                
                // Check if the guild owner ID is in the whitelisted users.
                if (guild_manager.users.includes(guild.ownerId)) return; // Return if the owner is whitelisted.

                guild.leave(); // Leave the guild as they are not whitelisted.
                console.log(`I have left an unwhitelisted guild "${guild.name}(${guild.id})"`.red); // Log the action.
            });
        }
    }, 2000);
};