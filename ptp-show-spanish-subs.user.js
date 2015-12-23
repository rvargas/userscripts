// ==UserScript==
// @name			Spanish Subtitles in PTP
// @description		Show subtitles without opening description
// @include			http://passthepopcorn.me/torrents.php?*
// @include         https://tls.passthepopcorn.me/torrents.php?*
// @copyright		Rafael Vargas
// @version			1.0
// @license			GNU GPL v3 <http://www.gnu.org/copyleft/gpl.html>
// @updateURL       https://github.com/rvargas/userscripts/raw/master/ptp-show-spanish-subs.user.js
// ==/UserScript==

/* CHANGELOG
 * 1.0.0 (30/04/13)
 ** Initial release
 */

show();

function show() {
	var rows_with_torrents = document.getElementsByClassName('torrent_info_row');
	for(var i=0; i<rows_with_torrents.length; i++) {
		this_div = rows_with_torrents[i];
		img_spanish = rows_with_torrents[i].querySelectorAll('img[title="Spanish"]');
		if(img_spanish.length){
			spanish_torrent_id = this_div.id.split("_")[1];
			spanish_torrent_description = document.getElementById("group_torrent_header_"+spanish_torrent_id).querySelectorAll('td')[0];
			spanish_torrent_description.innerHTML += img_spanish[0].outerHTML
		}
	}
}