// @flow strict

export type StoreType = 'Beatport' | 'iTunes' | 'Amazon' | 'Spotify';

export type ReleaseType = {|
	artist: string,
	buy: {
		[key: StoreType]: {|
			url: string,
		|},
	},
	catalog: string,
	date: string,
	title: string,
	tracks: {
		[key: string]: string,
	},
	type: string,
|};

const releases: Array<ReleaseType> = [{
	artist: 'Evgueni Naverniouk',
	catalog: 'GXD0001',
	title: 'Moving Forward',
	type: 'album',
	date: '2010-12-05',
	tracks: {
		'Moving Forward': '05:30',
		Reprise: '05:07',
		Zoology: '04:30',
		Apóleia: '00:52',
		'A Game of Cat & Mouse': '04:37',
		'Itchy Bitchy Spyder': '05:15',
		'Tea Party': '06:30',
		'By The Way': '04:28',
	},
	buy: {
		Spotify: {
			url: 'https://open.spotify.com/album/6ZPFSOyvbCs12SyqEQ8aIv',
		},
		iTunes: {
			url: 'https://itunes.apple.com/ca/album/moving-forward/1227264741',
		},
		Beatport: {
			url: 'http://www.beatport.com/release/moving-forward/883056',
		},
	},
}, {
	artist: 'Evgueni Naverniouk',
	catalog: 'GXD0002',
	title: 'Pandemic 2.5 Soundtrack',
	type: 'ep',
	date: '2012-05-09',
	tracks: {
		'Fragile Existence [Extended Version]': '02:59',
		Quarantine: '02:09',
		'Fragile Existence [Game Edit]': '00:48',
	},
	buy: {
		Spotify: {
			url: 'https://open.spotify.com/album/37dugCepVfj2Hg4SzNd3us',
		},
		iTunes: {
			url: 'http://itunes.apple.com/ca/album/pandemic-2.5-soundtrack-ep/id525558248',
		},
		Beatport: {
			url: 'http://www.beatport.com/release/pandemic-2-5-soundtrack/911464',
		},
	},
}, {
	artist: 'Evgueni Naverniouk',
	catalog: 'GXD0003',
	title: 'Scapefall (Original Game Soundtrack)',
	type: 'ep',
	date: '2019-08-25',
	tracks: {
		Scapefall: '01:28',
		'Through the Alleys': '02:31',
		'The Scouring': '04:00',
		'Chasing the Fox': '03:55',
	},
	buy: {
		Spotify: {
			url: 'https://open.spotify.com/album/046kM6IAR79ESQBADVLsfn',
		},
		iTunes: {
			url: 'https://music.apple.com/ca/album/scapefall-original-game-soundtrack-ep/1478500932',
		},
		Amazon: {
			url: 'https://www.amazon.com/Scapefall-Soundtrack-Evgueni-Naverniouk/dp/B07X5828GB/',
		},
	},
}, {
	artist: 'Evgueni Naverniouk',
	catalog: 'GXD0004',
	title: 'Kingdom Keeper (Original Game Soundtrack)',
	type: 'ep',
	date: '2019-08-25',
	tracks: {
		Entrance: '00:15',
		Swell: '00:08',
		'Main Menu': '00:36',
		'Adventure Theme': '01:22',
		'Boss Theme': '00:20',
	},
	buy: {
		Spotify: {
			url: 'https://open.spotify.com/album/4Z2BfCvRrL4pYUIYemZGkv',
		},
		iTunes: {
			url: 'https://music.apple.com/ca/album/kingdom-keeper-original-game-soundtrack-ep/1478500392',
		},
		Amazon: {
			url: 'https://www.amazon.com/Kingdom-Keeper-Original-Game-Soundtrack/dp/B07X6JKQ43',
		},
	},
}, {
	artist: 'Evgueni Naverniouk',
	catalog: 'GXD0005',
	title: 'Pandemic 2 (Original Game Soundtrack)',
	type: 'ep',
	date: '2020-01-22',
	tracks: {
		'Main Theme': '02:12',
		Evacuation: '00:45',
		Fade: '00:02',
		'Meaty Weeds': '00:06',
		'Evacuation [Heavy Mix]': '00:45',
	},
	buy: {
		Spotify: {
			url: 'https://open.spotify.com/album/0v86b9xgHftIkQ7QiZj4IZ',
		},
		iTunes: {
			url: 'https://music.apple.com/ca/album/pandemic-2-original-game-soundtrack-ep/1495855911',
		},
		Amazon: {
			url: 'https://www.amazon.com/Pandemic-2-Original-Game-Soundtrack/dp/B0842Y2SP3',
		},
	},
}].reverse();

export default releases;
