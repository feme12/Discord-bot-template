module.exports = ({ interaction, commandObj, handler }) => {
    if (interaction.user.id === '123123123123123' ) { // Check there user id.
      interaction.reply({
        content: "You are not allowed to run commands.",
        ephemeral: true,
      });
  
      return true; // True to make it not execute the command. And false to make it execute the command.
    }
};