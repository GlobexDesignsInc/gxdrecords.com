export type StoreType = 'Amazon' | 'Beatport' | 'iTunes' | 'Spotify';

export type ReleaseType = {
	artist: string,
	buy: Partial<Record<StoreType, {
		url: string,
	}>>,
	catalog: string,
	date: string,
	title: string,
	tracks: Array<{duration: string, name: string}>,
	type: string,
};

const releases: Array<ReleaseType> = [{
	artist: 'Evgueni Naverniouk',
	buy: {
		Beatport: {
			url: 'http://www.beatport.com/release/moving-forward/883056',
		},
		iTunes: {
			url: 'https://itunes.apple.com/ca/album/moving-forward/1227264741',
		},
		Spotify: {
			url: 'https://open.spotify.com/album/6ZPFSOyvbCs12SyqEQ8aIv',
		},
	},
	catalog: 'GXD0001',
	date: '2010-12-05',
	title: 'Moving Forward',
	tracks: [{
		duration: '05:30',
		name: 'Moving Forward',
	}, {
		duration: '05:07',
		name: 'Reprise',
	}, {
		duration: '04:30',
		name: 'Zoology',
	}, {
		duration: '00:52',
		name: 'Apóleia',
	}, {
		duration: '04:37',
		name: 'A Game of Cat & Mouse',
	}, {
		duration: '05:15',
		name: 'Itchy Bitchy Spyder',
	}, {
		duration: '06:30',
		name: 'Tea Party',
	}, {
		duration: '04:28',
		name: 'By The Way',
	}],
	type: 'album',
}, {
	artist: 'Evgueni Naverniouk',
	buy: {
		Beatport: {
			url: 'http://www.beatport.com/release/pandemic-2-5-soundtrack/911464',
		},
		iTunes: {
			url: 'http://itunes.apple.com/ca/album/pandemic-2.5-soundtrack-ep/id525558248',
		},
		Spotify: {
			url: 'https://open.spotify.com/album/37dugCepVfj2Hg4SzNd3us',
		},
	},
	catalog: 'GXD0002',
	date: '2012-05-09',
	title: 'Pandemic 2.5 Soundtrack',
	tracks: [{
		duration: '02:59',
		name: 'Fragile Existence [Extended Version]',
	}, {
		duration: '02:09',
		name: 'Quarantine',
	}, {
		duration: '00:48',
		name: 'Fragile Existence [Game Edit]',
	}],
	type: 'ep',
}, {
	artist: 'Evgueni Naverniouk',
	buy: {
		Amazon: {
			url: 'https://www.amazon.com/Scapefall-Soundtrack-Evgueni-Naverniouk/dp/B07X5828GB/',
		},
		iTunes: {
			url: 'https://music.apple.com/ca/album/scapefall-original-game-soundtrack-ep/1478500932',
		},
		Spotify: {
			url: 'https://open.spotify.com/album/046kM6IAR79ESQBADVLsfn',
		},
	},
	catalog: 'GXD0003',
	date: '2019-08-25',
	title: 'Scapefall (Original Game Soundtrack)',
	tracks: [{
		duration: '01:28',
		name: 'Scapefall',
	}, {
		duration: '02:31',
		name: 'Through the Alleys',
	}, {
		duration: '04:00',
		name: 'The Scouring',
	}, {
		duration: '03:55',
		name: 'Chasing the Fox',
	}],
	type: 'ep',
}, {
	artist: 'Evgueni Naverniouk',
	buy: {
		Amazon: {
			url: 'https://www.amazon.com/Kingdom-Keeper-Original-Game-Soundtrack/dp/B07X6JKQ43',
		},
		iTunes: {
			url: 'https://music.apple.com/ca/album/kingdom-keeper-original-game-soundtrack-ep/1478500392',
		},
		Spotify: {
			url: 'https://open.spotify.com/album/4Z2BfCvRrL4pYUIYemZGkv',
		},
	},
	catalog: 'GXD0004',
	date: '2019-08-25',
	title: 'Kingdom Keeper (Original Game Soundtrack)',
	tracks: [{
		duration: '00:15',
		name: 'Entrance',
	}, {
		duration: '00:08',
		name: 'Swell',
	}, {
		duration: '00:36',
		name: 'Main Menu',
	}, {
		duration: '01:22',
		name: 'Adventure Theme',
	}, {
		duration: '00:20',
		name: 'Boss Theme',
	}],
	type: 'ep',
}, {
	artist: 'Evgueni Naverniouk',
	buy: {
		Amazon: {
			url: 'https://www.amazon.com/Pandemic-2-Original-Game-Soundtrack/dp/B0842Y2SP3',
		},
		iTunes: {
			url: 'https://music.apple.com/ca/album/pandemic-2-original-game-soundtrack-ep/1495855911',
		},
		Spotify: {
			url: 'https://open.spotify.com/album/0v86b9xgHftIkQ7QiZj4IZ',
		},
	},
	catalog: 'GXD0005',
	date: '2020-01-22',
	title: 'Pandemic 2 (Original Game Soundtrack)',
	tracks: [{
		duration: '02:12',
		name: 'Main Theme',
	}, {
		duration: '00:45',
		name: 'Evacuation',
	}, {
		duration: '00:02',
		name: 'Fade',
	}, {
		duration: '00:06',
		name: 'Meaty Weeds',
	}, {
		duration: '00:45',
		name: 'Evacuation [Heavy Mix]',
	}],
	type: 'ep',
}].reverse();

export default releases;
