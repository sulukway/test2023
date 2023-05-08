window.onload = function() {
	flowplayer("#hlsjsvod", {
		splash: true,
		aspectRatio: "16:9",

		clip: {
			hlsjs: { safari: true },
			sources: [
				{
					type: "application/x-mpegurl",
					src: "https://sulukway.github.io/ktv/stasion/MoviesNow.m3u8"
				}
			]
		}
	});
};