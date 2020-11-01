// @flow strict

import React, {type Element, Fragment} from 'react';
import releases, {type ReleaseType, type StoreType} from '../../releases';
import Image from 'next/image';
import styles from './Releases.module.css';

export const Releases = (): Element<typeof Fragment> => (
	<Fragment>
		<h2 className={styles.title}>Releases</h2>
		{releases.map((
			release: ReleaseType
		): Element<'div'> => (
			<div className={styles.release} key={release.catalog}>
				<div className={styles.left}>
					<Image
						alt={`${release.artist} - ${release.title}`}
						height='320'
						src={`/releases/${release.catalog}.jpg`}
						width='320' />

					<div className={styles.stores}>
						{Object.keys(release.buy).map((
							buy: StoreType
						): Element<'a'> => {
							const action = buy === 'Spotify' ? 'Stream' : 'Buy';
							const title = `${action} on ${buy}`;

							return (
								<a
									className={styles.button}
									href={release.buy[buy].url}
									key={buy}
									rel='noopener noreferrer'
									target='_blank'
									title={title}>
									{action} on <strong>{buy}</strong>
								</a>
							);
						})}
					</div>
				</div>
				<div className={styles.right}>
					<h3
						className={styles.releaseName}
						title={`${release.artist} - ${release.title}`}>
						<strong>{release.artist}</strong> - {release.title}
					</h3>

					<p className={styles.details}>
						<strong>Catalog:</strong> {release.catalog}
						<span className={styles.vr}>|</span>
						<strong>Released:</strong> {release.date}
					</p>

					<table className={styles.tracks}>
						<tbody>
							{Object.keys(release.tracks).map((
								trackName: string,
								i: number
							): Element<'tr'> => (
								<tr
									className={i % 2 ? styles.trackAlt : styles.track}
									key={i}>
									<td className={styles.trackNumber}>
										{i + 1}
									</td>
									<td>{trackName}</td>
									<td>{release.tracks[trackName]}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		))}
	</Fragment>
);

export default Releases;
