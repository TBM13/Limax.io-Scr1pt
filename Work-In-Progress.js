// ==UserScript==
// @name         Limax.io Scr1pt
// @namespace    Limax.io Scr1pt
// @version      2.0.0
// @license      MIT
// @homepageURL  https://github.com/TBM13/Limax.io-Scr1pt
// @contributionURL https://www.paypal.me/tbm13
// @icon         http://limax.io/img/limax.ico
// @description  Mod for Limax.io
// @description:es-ES Mod para Limax.io
// @author       TBM13
// @match        http://limax.io/*
// @grant        none

// ==/UserScript==

//WARNING: THIS IS AN WORK IN PROGRESS PREVIEW OF THE FUTURE 2.0 VERSION OF LIMAX.IO SCR1PT.

/*
MIT License

Copyright (c) 2018 TBM13 (TBM_13 or TBM 13)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var style = document.createElement("style");
style.type = "text/css";
style.innerHTML = '.scr1ptBtnSpace {background-color: #47d169; border: none; color: white; text-align: center; text-decoration: none; display: inline-block; font-size: 14px; padding: 7px 16px; cursor: pointer; transition: 0.3s;} .scr1ptBtnSpace:hover {background-color: #47b469;} .scr1ptBtnSpace:active {background-color: #478e69;} .scr1ptBtnCandy {background-color: #cd2a3f; border: none; color: white; text-align: center; text-decoration: none; display: inline-block; font-size: 14px; padding: 7px 16px; cursor: pointer; transition: 0.3s;} .scr1ptBtnCandy:hover {background-color: #b32a3f;} .scr1ptBtnCandy:active {background-color: #9d2a36;} .scr1ptBtnIce {background-color: #00b3f8; border: none; color: white; text-align: center; text-decoration: none; display: inline-block; font-size: 14px; padding: 7px 16px; cursor: pointer; transition: 0.3s;} .scr1ptBtnIce:hover {background-color: #009af8;} .scr1ptBtnIce:active {background-color: #007bf8;} .scr1ptBtnDark {background-color: #a70000; border: none; color: white; text-align: center; text-decoration: none; display: inline-block; font-size: 14px; padding: 7px 16px; cursor: pointer; transition: 0.3s;} .scr1ptBtnDark:hover {background-color: #8d0000;} .scr1ptBtnDark:active {background-color: #5b0000;} .scr1ptText {font-family: Arial;} .scr1ptPanel {background:rgba(255,255,255,0.2); border-style: solid; border-width: 3px; border-color: rgb(255, 255, 255, 0.5); border-radius: 5px;} \
.scr1ptContainerSpace {display: block; position: relative; padding-left: 35px; margin-bottom: 12px; cursor: pointer; font-size: 18px; color: white; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;} .scr1ptContainerSpace input {position: absolute; opacity: 0; cursor: pointer;} .scr1ptCheckmarkSpace {position: absolute; top: 0; left: 0; height: 25px; width: 25px; background-color: #828282; transition: 0.3s;} .scr1ptContainerSpace:hover input ~ .scr1ptCheckmarkSpace {background-color: #93afa1;} .scr1ptContainerSpace input:checked ~ .scr1ptCheckmarkSpace {background-color: #70e5a8;} .scr1ptCheckmarkSpace:after {content: ""; position: absolute; display: none;} .scr1ptContainerSpace input:checked ~ .scr1ptCheckmarkSpace:after {display: block;} .scr1ptContainerSpace .scr1ptCheckmarkSpace:after {left: 9px; top: 5px; width: 5px; height: 10px; border: solid white; border-width: 0 3px 3px 0; -webkit-transform: rotate(45deg); -ms-transform: rotate(45deg); transform: rotate(45deg);} \
.scr1ptContainerCandy {display: block; position: relative; padding-left: 35px; margin-bottom: 12px; cursor: pointer; font-size: 18px; color: white; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;} .scr1ptContainerCandy input {position: absolute; opacity: 0; cursor: pointer;} .scr1ptCheckmarkCandy {position: absolute; top: 0; left: 0; height: 25px; width: 25px; background-color: #828282; transition: 0.3s;} .scr1ptContainerCandy:hover input ~ .scr1ptCheckmarkCandy {background-color: #af9394;} .scr1ptContainerCandy input:checked ~ .scr1ptCheckmarkCandy {background-color: #e26f73;} .scr1ptCheckmarkCandy:after {content: ""; position: absolute; display: none;} .scr1ptContainerCandy input:checked ~ .scr1ptCheckmarkCandy:after {display: block;} .scr1ptContainerCandy .scr1ptCheckmarkCandy:after {left: 9px; top: 5px; width: 5px; height: 10px; border: solid white; border-width: 0 3px 3px 0; -webkit-transform: rotate(45deg); -ms-transform: rotate(45deg); transform: rotate(45deg);} \
.scr1ptContainerIce {display: block; position: relative; padding-left: 35px; margin-bottom: 12px; cursor: pointer; font-size: 18px; color: white; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;} .scr1ptContainerIce input {position: absolute; opacity: 0; cursor: pointer;} .scr1ptCheckmarkIce {position: absolute; top: 0; left: 0; height: 25px; width: 25px; background-color: #828282; transition: 0.3s;} .scr1ptContainerIce:hover input ~ .scr1ptCheckmarkIce {background-color: #8da0a8;} .scr1ptContainerIce input:checked ~ .scr1ptCheckmarkIce {background-color: #6bb2e2;} .scr1ptCheckmarkIce:after {content: ""; position: absolute; display: none;} .scr1ptContainerIce input:checked ~ .scr1ptCheckmarkIce:after {display: block;} .scr1ptContainerIce .scr1ptCheckmarkIce:after {left: 9px; top: 5px; width: 5px; height: 10px; border: solid white; border-width: 0 3px 3px 0; -webkit-transform: rotate(45deg); -ms-transform: rotate(45deg); transform: rotate(45deg);}';
document.getElementsByTagName("head")[0].appendChild(style);
var ver = "dev 2.0", adsItem,
cTheme = "space";

window.onload = function() {
    window.is_mobile || window.is_android || window.is_ios ? (document.getElementById("c1").ontouchstart = function() {
        window.disa_interface || window.set_c1_color(this)
    }, document.getElementById("c2").ontouchstart = function() {
        window.disa_interface || window.set_c2_color(this)
    }, document.getElementById("c3").ontouchstart = function() {
        window.disa_interface || window.set_c3_color(this)
    }, document.getElementById("c4").ontouchstart = function() {
        window.disa_interface || window.set_c4_color(this)
    }) : (document.getElementById("c1").onclick = function() {
        window.disa_interface || window.set_c1_color(this)
        cTheme = "candy";
        window.setTheme();
    }, document.getElementById("c2").onclick = function() {
        window.disa_interface || window.set_c2_color(this)
        cTheme = "space";
        window.setTheme();
    }, document.getElementById("c3").onclick = function() {
        window.disa_interface || window.set_c3_color(this)
        cTheme = "ice";
        window.setTheme();
    }, document.getElementById("c4").onclick = function() {
        window.disa_interface || window.set_c4_color(this)
        cTheme = "dark";
        window.setTheme();
            });
    window.getItems();
    if (adsItem == "true") {
        window.rAds(false);
        check1.checked = true;
    }
    txt1.innerText = "limax.io scr1pt v" + ver;
    check1Text.setAttribute("style", "position: relative; top: -7px; left: 5px;");
};

window.getItems = function() {
    adsItem = localStorage.getItem("AdsTBM");
};

window.setItems = function() {
    localStorage.setItem("AdsTBM", adsItem);
};

window.setTheme = function() {
    if(cTheme == "candy") {
        btnGH.setAttribute("class", "scr1ptBtnCandy");
        btnGF.setAttribute("class", "scr1ptBtnCandy");
        check1Text.setAttribute("class", "scr1ptContainerCandy");
        check1Span.setAttribute("class", "scr1ptCheckmarkCandy");
    } else if(cTheme == "space") {
        btnGH.setAttribute("class", "scr1ptBtnSpace");
        btnGF.setAttribute("class", "scr1ptBtnSpace");
        check1Text.setAttribute("class", "scr1ptContainerSpace");
        check1Span.setAttribute("class", "scr1ptCheckmarkSpace");
    } else if(cTheme == "ice") {
        btnGH.setAttribute("class", "scr1ptBtnIce");
        btnGF.setAttribute("class", "scr1ptBtnIce");
        check1Text.setAttribute("class", "scr1ptContainerIce");
        check1Span.setAttribute("class", "scr1ptCheckmarkIce");
    } else if(cTheme == "dark") {
        btnGH.setAttribute("class", "scr1ptBtnDark");
        btnGF.setAttribute("class", "scr1ptBtnDark");
        check1Text.setAttribute("class", "scr1ptContainerDark");
        check1Span.setAttribute("class", "scr1ptCheckmarkDark");
    } else alert("Error in script.setTheme(): Invalid cTheme value.");
};

window.rAds = function (msg) {
    if(adsItem == "true" && msg) { //restore ads
        adsItem = "false";
        window.setItems();
        alert("Ads restored. Refresh the website to apply the changes.");
    } else {
        document.getElementById("advert").innerHTML = "";
        document.getElementById("play").onclick = function() {window.start();};
        if(msg) {
            adsItem = "true";
            window.setItems();
            alert("Ads removed.");
        } else document.getElementById("check1").checked = true;
    }
};

window.goGH = function() {
    window.open("https://github.com/TBM13/Limax.io-Scr1pt");
};

window.goGF = function() {
    window.open("");
};

var panel1 = document.createElement("Div");
panel1.setAttribute("style", "position: fixed; top: 50px; left: -4px; height:300px; width:235px;");
panel1.setAttribute("class", "scr1ptPanel");
panel1.setAttribute("id", "scr1ptPanel");
document.getElementById("container").appendChild(panel1);

var txt1 = document.createElement("h2");
txt1.setAttribute("style", "color: white; position: relative; top: -3px; left: 18px;");
txt1.innerText = "loading script...";
document.getElementById("scr1ptPanel").appendChild(txt1);

var check1Text = document.createElement("label");
check1Text.setAttribute("class", "scr1ptContainerSpace");
check1Text.setAttribute("style", "position: relative; top: -7px; left: 5px; visibility: hidden;");
check1Text.innerText = "remove ads";
var check1 = document.createElement("input");
check1.setAttribute("type", "checkbox");
check1.setAttribute("id", "check1");
check1.setAttribute("onchange", "rAds(true);");
var check1Span = document.createElement("span");
check1Span.setAttribute("class", "scr1ptCheckmarkSpace");
document.getElementById("scr1ptPanel").appendChild(check1Text);
check1Text.appendChild(check1);
check1Text.appendChild(check1Span);

var btnGH = document.createElement("Button");
btnGH.setAttribute("style", "position: relative; top: 160px; left: 5px; height:30px; width:110px;");
btnGH.setAttribute("class", "scr1ptBtnSpace");
btnGH.setAttribute("id", "btnGH");
btnGH.innerText = "GitHub";
btnGH.setAttribute("onclick", "goGH();");
document.getElementById("scr1ptPanel").appendChild(btnGH);

var btnGF = document.createElement("Button");
btnGF.setAttribute("style", "position: relative; top: 160px; left: 10px; height:30px; width:110px;");
btnGF.setAttribute("class", "scr1ptBtnSpace");
btnGF.setAttribute("id", "btnGF");
btnGF.innerText = "GreasyFork";
btnGF.setAttribute("onclick", "goGF();");
document.getElementById("scr1ptPanel").appendChild(btnGF);
