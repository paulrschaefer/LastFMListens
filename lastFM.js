/* Loads most recently listened to tracks from Last.fm */
/* You'll need jQuery */

$(document).ready(function()) {
	$.ajax({
		type: "GET",
		/* Get this from the last.fm API */
		url: "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=paul_r_schaefer&api_key=b25b959554ed76058ac220b7b2e0a026&limit=3",
		dataType: "xml",
		success: showListens
	});
});

function showListens(xml) {
	/* You have to put :not([nowplaying]) or Last.fm sends 2 tracks if you're listening to one at the moment */
	$(xml).find("track:not([nowplaying])").each(function()
	{
		/* Create an empty div with the class listen */
		$(".listen").append("<a href=" + $(this).find("url").text() + ">" + $(this).find("artist").text() + " &mdash; " + $(this).find("name").text() + "</a><br /><br />");	
	});
}