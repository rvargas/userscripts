// ==UserScript==
// @name         Reverse comments in inbox
// @namespace    https://github.com/rvargas/userscripts
// @version      1.0
// @description  This script reverses the order of the comments in the inbox
// @author       Rafael Vargas
// @license      GNU GPL v3 <http://www.gnu.org/copyleft/gpl.html>
// @match        https://*what.cd/inbox.php?action=viewconv&id=*
// @updateURL    https://github.com/rvargas/userscripts/raw/master/reverse-comments.user.js
// ==/UserScript==

var comments = Array.prototype.slice.call(document.querySelectorAll("div.box.vertical_space"));
var reference = document.querySelector('#messageform');

function move_comments(comment){
    reference.parentNode.insertBefore(comment, reference.nextSibling);
}

function main() {
    comments.forEach(move_comments);
}

main();