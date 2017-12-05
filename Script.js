// ==UserScript==
// @name         Limax.io Scr1pt
// @namespace    LimaxIoScr1pt
// @version      0.3
// @homepageURL  https://github.com/Truebamateo/Limax.io-Scr1pt
// @icon         https://limax.io/img/limax.ico
// @description  Script para Limax.io
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
    document.getElementById("advert").innerHTML = "<h1 style='color:White;'>Anuncio bloqueado por Limax.io Scr1pt</h1>";
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
    cmd = window.prompt("Superhex.io Scr1pt por Truebamateo - Insertar comando: (Para ver la lista de comandos insertar Comandos)");
    if (cmd == "Comandos" || cmd == "comandos" || cmd == "COMANDOS")
    {
        alert(" Lista de comandos:\nComandos: Muestra la lista de comandos.\nAurora: Activa/desactiva el efecto aurora. (BETA)\nTerremoto: Activa/desactiva el efecto terremoto.\nSkin: Cambia la skin.\nAds: Desactiva/activa los anuncios.\nLeaderboard: Activa/desactiva la tabla de clasificación.\nFPS: Activa/desactiva el indicador de FPS.\nZoom: Activa/desactiva el cheat de Zoom.");
    } else if(cmd == "Aurora" || cmd == "aurora" || cmd == "AURORA")
    {
        if(AuroraStatus === false)
        {
            PLAYER_START_LENGTH = 25;
            AuroraStatus = true;
            window.localStorage.setItem("AuroraTBM", true);
            alert("Efecto 'Aurora' activado. (Afecta al rendimiento y puede producir problemas)");
        } else {
            PLAYER_START_LENGTH = 3;
            window.localStorage.removeItem("AuroraTBM");
            alert("Efecto 'Aurora' desactivado. Se recomienda recargar la página.");
        }
    } else if(cmd == "Terremoto" || cmd == "terremoto" || cmd == "TERREMOTO")
    {
        if(TerremotoStatus === false)
        {
            BONUS_SPEED = 2;
            TerremotoStatus = true;
            window.localStorage.setItem("TerremotoTBM", true);
            alert("Efecto 'Terremoto' activado.");
        } else
        {
            BONUS_SPEED = 0.2;
            TerremotoStatus = false;
            window.localStorage.removeItem("TerremotoTBM");
            alert("Efecto 'Terremoto' desactivado. Se recomienda recargar la página.");
        }
    } else if(cmd == "Skin" || cmd == "skin" || cmd == "SKIN")
    {
        var SkinIDPrompt = window.prompt("ID de la skin:");
        SkinIDPrompt = Number(SkinIDPrompt);
        current_skin = SkinIDPrompt;
        alert("Skin cambiada. Si introduciste un ID inválido, se generarán errores.");
    } else if(cmd == "Ads" || cmd == "ads" || cmd == "ADS")
    {
       if(AdsStatus === true)
       {
           window.localStorage.setItem("AdsTBM", true);
           RemoveAds();
           alert("Anuncios desactivados.");
       } else
       {
           window.localStorage.removeItem("AdsTBM");
           AdsStatus = true;
           alert("Anuncios activados. Se necesita recargar la página.");
       }
    } else if(cmd == "Leaderboard" || cmd == "leaderboard" || cmd == "LEADERBOARD")
    {
        if(LBOff)
        {
            window.localStorage.removeItem("LBTBM");
            LBOff = window.localStorage.getItem("LBTBM");
            alert("Leaderboard activada. Es necesario recargar la página.");
        } else {
            window.localStorage.setItem("LBTBM", true);
            LBOff = window.localStorage.getItem("LBTBM");
            alert("Leaderboard desactivada. Es necesario recargar la página.");
        }
    } else if(cmd == "FPS" || cmd == "fps" || cmd == "Fps")
      {
          if(SFPS)
          {
              window.localStorage.removeItem("SFPSTBM");
              SFPS = window.localStorage.getItem("SFPSTBM");
              alert("Indicador de FPS desactivado. Es necesario recargar la página.");
          } else {
          window.localStorage.setItem("SFPSTBM", true);
          SFPS = window.localStorage.getItem("SFPSTBM");
          addStats();
              alert("Indicador de FPS activado.");
          }
       } else if(cmd == "Zoom" || cmd == "zoom" || cmd == "ZOOM")
       {
          if(ZCheat)
          {
              window.localStorage.removeItem("ZoomTBM");
              ZCheat = window.localStorage.getItem("ZoomTBM");
              is_android = false;
              alert("Cheat de Zoom desactivado.");
          } else {
              window.localStorage.setItem("ZoomTBM", true);
              ZCheat = window.localStorage.getItem("ZoomTBM");
              is_android = true;
              alert("Cheat de Zoom activado.");
          }
       }

};

var btn = document.createElement("IMG");
btn.setAttribute("src", "http://www.healthmarketsinc.com/wp-content/uploads/2015/03/hamburger-menu.png");
btn.setAttribute("style", "position: fixed; top: 50px;");
btn.setAttribute("onclick", "commandsTBM();");
document.getElementById("select_skin").appendChild(btn);
