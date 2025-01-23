// Imports
import 'colors'
import { dirname } from "path";
import { fileURLToPath } from "url"
import { CommandKit } from "commandkit";
import { config as Dotenv } from "dotenv";
import { Client, GatewayIntentBits } from "discord.js";

// Init dotenv so you can use process.env
Dotenv()

// Define __dirname for paths
const __dirname = dirname(fileURLToPath(import.meta.url));

// Init discord client
const client = new Client({
    // Basic intents
    intents: [
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildModeration
    ]
})

// Init command kit
new CommandKit({
    client, // Pass your discord client to commandkit.
    devUserIds: [], // Put your id or your dev's ids in. Ex: ["123", "123"] (These are the people who can run dev commands.)
    devGuildIds: [], // Put your dev guilds. Ex: ["123", "123"] (this is where dev commands will be accessed at)
    eventsPath: __dirname+"/events", // Path to events folder.
    validationsPath: __dirname+"/validations", // Path to validations folder (the things that run before the command code is ran.).
    commandsPath: __dirname+"/commands", // Path to the commands folder where your command files are stored.
    skipBuiltInValidations: false, // Whether or not you want to skip things like dev only checks.
    bulkRegister: true // Whether or not all commands load at once.
})

// Logging into your discord bot.
client.login(process.env.TOKEN)