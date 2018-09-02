// @flow

import React, {type Element, Fragment, PureComponent} from 'react';
import releases, {type ReleaseType, type StoreType} from './../../releases';
import styles from './Releases.css';

type PropsType = {};

export default class Releases extends PureComponent<PropsType> {
	static displayName = 'Releases';

	render (): Element<typeof Fragment> {
		return (
			<Fragment>
				<h2 className={styles.title}>Releases</h2>
				{releases.map((
					release: ReleaseType,
					releaseIndex: number
				): Element<'div'> => (
					<div className={styles.release} key={releaseIndex}>
						<div className={styles.left}>
							<div className={styles.cover}>
								<img
									alt={`${release.artist} - ${release.title}`}
									height='320'
									src={`/static/releases/${release.catalog}.jpg`}
									width='320' />
							</div>

							{Object.keys(release.buy).map((
								buy: StoreType
							): Element<'a'> => (
								<a
									className={styles.button}
									href={release.buy[buy].url}
									key={buy}
									title={`Buy on ${buy}`}>
									Buy on {buy}<br />
									{release.buy[buy].price}
								</a>
							))}
						</div>
						<div className={styles.right}>
							<h3
								className={styles.releaseName}
								title={`${release.artist} - ${release.title}`}>
								<strong>{release.artist}</strong> - {release.title}
							</h3>

							<p className={styles.details}>
								<strong>Catalog:</strong> {release.catalog} <span className={styles.vr}>|</span> <strong>Released:</strong> {release.date}
							</p>

							<table className='tablelist'>
								<tbody>
									{Object.keys(release.tracks).map((
										trackName: string,
										i: number
									): Element<'tr'> => (
										<tr className={i % 2 ? styles.alt : null} key={i}>
											<td className={styles.trackNumber}>
												<div>
													<span>{i + 1}</span>
												</div>
											</td>
											<td className={styles.trackName}>
												{trackName}
											</td>
											<td className={styles.trackDuration}>
												{release.tracks[trackName]}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				))}
			</Fragment>
		);
	}
}
