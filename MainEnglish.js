// ==UserScript==
// @name         Limax.io Scr1pt
// @namespace    LimaxIoScr1pt
// @version      0.1.1
// @description  Script for Limax.io
// @author       Truebamateo
// @match        http://limax.io/*
// @grant        none
// ==/UserScript==

var AuroraTBM = window.localStorage.getItem("AuroraTBM");
var TerremotoTBM = window.localStorage.getItem("TerremotoTBM");
var AdsTBM = window.localStorage.getItem("AdsTBM");
var AuroraStatus = false;
var TerremotoStatus = false;
var AdsStatus = true;

RemoveAds = function()
{
       document.getElementById("play").onclick = function() {
    start();
};
    document.getElementById("advert").innerHTML = "<h1 style='color:White;'>Ad blocked by Limax.io Scr1pt</h1>";
    AdsStatus = false;
    console.log("AdsStatus = "+ AdsStatus);
};

if(AdsTBM)
{
  RemoveAds();
}

if(AuroraTBM)
   {
     PLAYER_START_LENGTH = 25;
       AuroraStatus = true;
   }

if(TerremotoTBM)
{
    BONUS_SPEED = 2;
    TerremotoStatus = true;
}


commandsTBM = function(cmd){
    cmd = window.prompt("Superhex.io Scr1pt by Truebamateo - Insert command: (For view the command list type Help)");
    if (cmd == "Help" || cmd == "help" || cmd == "HELP")
    {
        alert(" Command list:\Help: Open the command list.\nAurora: Toggles on or off the aurora effect. (BETA)\Earthquake: Toggles on or off the Earthquake effect.\nSkin: Changes the skin.\nAds: Toggles on or off the ads.");
    } else if(cmd == "Aurora" || cmd == "aurora" || cmd == "AURORA")
    {
        if(AuroraStatus === false)
        {
            PLAYER_START_LENGTH = 25;
            AuroraStatus = true;
            window.localStorage.setItem("AuroraTBM", true);
            alert("'Aurora' effect activated. (Affects performance and can cause problems)");
        } else {
            PLAYER_START_LENGTH = 3;
            window.localStorage.removeItem("AuroraTBM");
            alert("'Aurora' effect deactivated. It's recommended to reload the page.");
        }
    } else if(cmd == "Earthquake" || cmd == "earthquake" || cmd == "EARTHQUAKE")
    {
        if(TerremotoStatus === false)
        {
            BONUS_SPEED = 2;
            TerremotoStatus = true;
            window.localStorage.setItem("TerremotoTBM", true);
            alert("'Earthquake' effect activated.");
        } else
        {
            BONUS_SPEED = 0.2;
            TerremotoStatus = false;
            window.localStorage.removeItem("TerremotoTBM");
            alert("'Earthquake' effect deactivated. It's recommended to reload the page.");
        }
    } else if(cmd == "Skin" || cmd == "skin" || cmd == "SKIN")
    {
        var SkinIDPrompt = window.prompt("Skin ID:");
        SkinIDPrompt = Number(SkinIDPrompt);
        current_skin = SkinIDPrompt;
        alert("Skin changed. If you entered an invalid ID, errors will be generated.");
    } else if(cmd == "Ads" || cmd == "ads" || cmd == "ADS")
    {
       if(AdsStatus === true)
       {
           window.localStorage.setItem("AdsTBM", true);
           RemoveAds();
           alert("Ads deactivated.");
       } else
       {
           window.localStorage.removeItem("AdsTBM");
           AdsStatus = true;
           alert("Ads activated. The page needs to be reloaded.");
       }
    }
};

var btn = document.createElement("IMG");
btn.setAttribute("src", "http://www.healthmarketsinc.com/wp-content/uploads/2015/03/hamburger-menu.png");
btn.setAttribute("style", "position: fixed; top: 50px;");
btn.setAttribute("onclick", "commandsTBM();");
document.getElementById("select_skin").appendChild(btn);
