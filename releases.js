// @flow

export type StoreType = 'Beatport' | 'iTunes' | 'Amazon';

export type ReleaseType = {
	artist: string,
	buy: {
		[key: StoreType]: {
			price: string,
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
			price: '9.99',
		},
		iTunes: {
			url: 'http://itunes.apple.com/ca/artist/evgueni-naverniouk/id409163130',
			price: '9.99',
		},
		Amazon: {
			url: 'http://www.amazon.com/Moving-Forward/dp/B0089WSSMS/ref=sr_1_2?s=music&ie=UTF8&qid=1341103558&sr=1-2&keywords=naverniouk',
			price: '7.92',
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
			price: '5.97',
		},
		iTunes: {
			url: 'http://itunes.apple.com/ca/album/pandemic-2.5-soundtrack-ep/id525558248',
			price: '2.97',
		},
		Amazon: {
			url: 'http://www.amazon.com/Pandemic-2-5-Soundtrack/dp/B008E8C33M/ref=sr_1_1?s=music&ie=UTF8&qid=1341103558&sr=1-1&keywords=naverniouk',
			price: '2.97',
		},
	},
}];

export default releases;
