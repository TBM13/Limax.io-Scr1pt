// ==UserScript==
// @name         Limax.io Scr1pt
// @namespace    LimaxIoScr1pt
// @version      0.3
// @homepageURL  https://github.com/Truebamateo/Limax.io-Scr1pt
// @icon         https://limax.io/img/limax.ico
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
var LBOff = window.localStorage.getItem("LBTBM");
var SFPS = window.localStorage.getItem("SFPSTBM");
var ZCheat = window.localStorage.getItem("ZoomTBM");

RemoveAds = function()
{
       document.getElementById("play").onclick = function() {
    start();
};
    document.getElementById("advert").innerHTML = "<h1 style='color:White;'>Ad blocked by Limax.io Scr1pt</h1>";
    AdsStatus = false;
};

if(AdsTBM)
{
  RemoveAds();
}

if(LBOff)
 {
     draw_leaderboard = null;
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

if(ZCheat)
 {
    is_android = true;
 }
 
 if(SFPS)
 {
     addStats();
 }


commandsTBM = function(cmd){
    cmd = window.prompt("Superhex.io Scr1pt by Truebamateo - Insert command: (For view the commands list type Commands)");
    if (cmd == "Commands" || cmd == "commands" || cmd == "COMMANDS")
    {
        alert(" Commands list:\nCommands: Open the command list.\nAurora: Toggles On or Off the aurora effect. (BETA)\nEarthquake: Toggles On or Off the Earthquake effect.\nSkin: Changes the skin.\nAds: Toggles On or Off the ads.\nLeaderboard: Toggles On or Off the Leaderboard\nFPS: Toggles On or Off the FPS indicator.\nZoom: Toggles On or Off the Zoom Cheat.");
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
            alert("'Aurora' effect deactivated. It's recommended reload the page.");
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
            alert("'Earthquake' effect deactivated. It's recommended reload the page.");
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
            } else if(cmd == "Leaderboard" || cmd == "leaderboard" || cmd == "LEADERBOARD")
     {
        if(LBOff)
        {
            window.localStorage.removeItem("LBTBM");
            LBOff = window.localStorage.getItem("LBTBM");
            alert("Leaderboard activated. It's necessary reload the page.");
        } else {
            window.localStorage.setItem("LBTBM", true);
            LBOff = window.localStorage.getItem("LBTBM");
            alert("Leaderboard deactivated. It's necessary reload the page.");
        }
    } else if(cmd == "FPS" || cmd == "fps" || cmd == "Fps")
      {
          if(SFPS)
          {
              window.localStorage.removeItem("SFPSTBM");
              SFPS = window.localStorage.getItem("SFPSTBM");
              alert("FPS Indicator deactivated. It's necessary reload the page.");
          } else {
          window.localStorage.setItem("SFPSTBM", true);
          SFPS = window.localStorage.getItem("SFPSTBM");
          addStats();
              alert("FPS Indicator activated.");
          }
       } else if(cmd == "Zoom" || cmd == "zoom" || cmd == "ZOOM")
       {
          if(ZCheat)
          {
              window.localStorage.removeItem("ZoomTBM");
              ZCheat = window.localStorage.getItem("ZoomTBM");
              is_android = false;
              alert("Zoom Cheat deactivated.");
          } else {
              window.localStorage.setItem("ZoomTBM", true);
              ZCheat = window.localStorage.getItem("ZoomTBM");
              is_android = true;
              alert("Zoom Cheat activated.");
          }
       }

};

var btn = document.createElement("IMG");
btn.setAttribute("src", "http://www.healthmarketsinc.com/wp-content/uploads/2015/03/hamburger-menu.png");
btn.setAttribute("style", "position: fixed; top: 50px;");
btn.setAttribute("onclick", "commandsTBM();");
document.getElementById("select_skin").appendChild(btn);
