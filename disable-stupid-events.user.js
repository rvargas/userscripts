// ==UserScript==
// @name         Disable stupid events
// @description  Disable stupid events
// @namespace    http://me.rafaelvargas
// @version      1.0
// @author       Rafael Vargas
// @match        http://*.milenio.com/*
// @match        http://milenio.com/*
// @match        http://*.eluniversal.com.mx/*
// @match        http://eluniversal.com.mx/*
// @match        http://rollingstone.com.mx/*
// @grant        none
// @updateURL    https://github.com/rvargas/userscripts/raw/master/disable-stupid-events.user.js
// ==/UserScript==

jQuery("body").unbind("copy paste");
jQuery("body").removeAttr("ondragstart onselectstart oncontextmenu");