// ==UserScript==
// @name         Fuck @thewarpaint
// @description  A friendly fix for Manoderecha's pdf viewer
// @namespace    http://me.rafaelvargas
// @version      1.0
// @author       Rafael Vargas
// @match        http://manoderecha.net/md/index.php/file/*
// @grant        none
// @updateURL    https://github.com/rvargas/userscripts/raw/master/fuck-thewarpaint.user.js
// ==/UserScript==

(function() {
    document.querySelector("#wrapper").style.height = '100vh';
})();