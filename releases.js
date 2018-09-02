// @flow

export type StoreType = 'Beatport' | 'iTunes' | 'Amazon';

export type ReleaseType = {
	artist: string,
	buy: {
		[key: StoreType]: {
			url: string,
		},
	},
	catalog: string,
	date: string,
	title: string,
	tracks: {
		[key: string]: string,
	},
	type: string,
};

export type ReleasesType = Array<ReleaseType>;

const releases: ReleasesType = [{
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
		Beatport: {
			url: 'http://www.beatport.com/release/moving-forward/883056',
		},
		iTunes: {
			url: 'https://itunes.apple.com/ca/album/moving-forward/1227264741',
		},
		Amazon: {
			url: 'https://www.amazon.com/Moving-Forward-Evgueni-Naverniouk/dp/B06ZY82ZQN',
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
		Beatport: {
			url: 'http://www.beatport.com/release/pandemic-2-5-soundtrack/911464',
		},
		iTunes: {
			url: 'http://itunes.apple.com/ca/album/pandemic-2.5-soundtrack-ep/id525558248',
		},
		Amazon: {
			url: 'https://www.amazon.com/Pandemic-2-5-Soundtrack-Evgueni-Naverniouk/dp/B071R493S3/',
		},
	},
}];

export default releases;
