/**
 * @name Greetings
 * @author AleSira
 * @version 1.0.0
 * @description Greetings for each log
 * @website https://alesira.pythonanywhere.com/
 * @authorLink https://www.instagram.com/aleiracusa9026/
 * @source https://github.com/ale933/Greetings/blob/main/greetings.plugin.js
 */
 

module.exports = class name{
    load() { }
    start() {
        const shitposts = ["Ciao!", "Bella Bro!", "Bentornato, ciccione obeso", "Welcome Back!", "Bentornato bellezza <3", "Wassup", "Chiudi Discord e fatti una vita 😡"];

        const randomShitposts = shitposts[Math.floor(Math.random() * shitposts.length)];
        BdApi.showToast(randomShitposts, {type: "success", icon: false, timeout: 7000})
        
    }

    stop() {
        BdApi.alert("Plugin disactivated", "See you next time!")

    }
}
