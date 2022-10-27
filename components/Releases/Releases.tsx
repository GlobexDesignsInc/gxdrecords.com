import Image from 'next/image';
import React from 'react';
import releases from '../../constants/releases';
import styles from './Releases.module.css';

export const Releases = () => (
	<>
		<h2 className={styles.title}>Releases</h2>
		{releases.map((release, i) => (
			<div className={styles.release} key={release.catalog}>
				<div className={styles.left}>
					<Image
						alt={`${release.artist} - ${release.title}`}
						height='320'
						priority={i < 2}
						src={`/releases/${release.catalog}.jpg`}
						width='320' />

					<div className={styles.stores}>
						{Object.entries(release.buy).map(([store, value]) => {
							const action = store === 'Spotify' ? 'Stream' : 'Buy';
							const title = `${action} on ${store}`;

							return (
								<a
									className={styles.button}
									href={value.url}
									key={store}
									rel='noopener noreferrer'
									target='_blank'
									title={title}>
									{action} on <strong>{store}</strong>
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
							{Object.keys(release.tracks).map((trackName, i) => (
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
	</>
);

export default Releases;
