// ==UserScript==
// @name            Spanish Subtitle Search in PTP
// @description     Add subdivx and Argenteam search to movie details
// @include         https://passthepopcorn.me/torrents.php?id=*
// @copyright       Rafael Vargas
// @version         1.1
// @license         GNU GPL v3 <http://www.gnu.org/copyleft/gpl.html>
// @updateURL       https://github.com/rvargas/userscripts/raw/master/ptp-search-subtitles.user.js
// ==/UserScript==

/* CHANGELOG
 * 1.0.0 (02/12/14)
 ** Initial release
 */

init();

function init() {
    var main_div = document.getElementsByClassName('linkbox')[0];
    var title = document.getElementsByClassName('page__title')[0].innerText.split(' by')[0].slice(0,-7);
    var subdivx_anchor = document.createElement('a');
    var argenteam_anchor = document.createElement('a');
    subdivx_anchor.setAttribute('href',"http://www.subdivx.com/index.php?buscar="+ title + "&accion=5&masdesc=&subtitulos=1&realiza_b=1");
    subdivx_anchor.setAttribute('class','linkbox__link');
    subdivx_anchor.setAttribute('target','_blank');
    subdivx_anchor.innerHTML = "[SubDivx]";
    argenteam_anchor.setAttribute('href',"http://www.argenteam.net/search?movieFilter=true&filter="+ title);
    argenteam_anchor.setAttribute('class','linkbox__link');
    argenteam_anchor.setAttribute('target','_blank');
    argenteam_anchor.innerHTML = " [Argenteam] ";
    main_div.appendChild(document.createElement('br'));
    main_div.appendChild(document.createElement('br'));
    main_div.appendChild(subdivx_anchor);
    main_div.appendChild(argenteam_anchor);
    var mydiv = document.getElementById("[myDiv] ");
}
