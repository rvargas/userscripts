// ==UserScript==
// @name         Disable stupid events
// @description  Disable stupid events
// @namespace    http://me.rafaelvargas
// @version      1.0.1
// @author       Rafael Vargas
// @match        https://*.milenio.com/*
// @match        https://milenio.com/*
// @match        https://*.eluniversal.com.mx/*
// @match        https://eluniversal.com.mx/*
// @match        https://rollingstone.com.mx/*
// @match        https://*.elgrafico.mx/*
// @grant        none
// @updateURL    https://github.com/rvargas/userscripts/raw/master/disable-stupid-events.user.js
// ==/UserScript==

jQuery("body").unbind("copy paste");
jQuery("body").removeAttr("ondragstart onselectstart oncontextmenu");
