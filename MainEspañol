// ==UserScript==
// @name         Limax.io Scr1pt
// @namespace    LimaxIoScr1pt
// @version      0.1
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

RemoveAds = function()
{
       document.getElementById("play").onclick = function() {
    start();
};
    document.getElementById("advert").innerHTML = "<h1 style='color:White;'>Anuncio bloqueado por Limax.io Scr1pt</h1>";
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
    cmd = window.prompt("Superhex.io Scr1pt por TBM - Insertar comando: (Para ver la lista de comandos insertar Comandos)");
    if (cmd == "Comandos" || cmd == "comandos" || cmd == "COMANDOS")
    {
        alert(" Lista de comandos:\nComandos: Muestra la lista de comandos.\nAurora: Activa/desactiva el efecto aurora. (BETA)\nTerremoto: Activa/desactiva el efecto terremoto.\nSkin: Cambia la skin.\nAds: Desactiva/activa los anuncios.");
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
    }
};

var btn = document.createElement("IMG");
btn.setAttribute("src", "http://www.healthmarketsinc.com/wp-content/uploads/2015/03/hamburger-menu.png");
btn.setAttribute("style", "position: fixed; top: 50px;");
btn.setAttribute("onclick", "commandsTBM();");
document.getElementById("select_skin").appendChild(btn);
