// @flow

import React, {type Element, PureComponent} from 'react';
import Releases from '../components/Releases';
import styles from './index.css';

type PropsType = {||};

export default class index extends PureComponent<PropsType> {
	static displayName = 'index';

	render (): Element<'div'> {
		return (
			<div className={styles.view}>
				<div className={styles.header}>
					<img
						alt='GXD Records'
						src='/static/logo.png' />
				</div>
				<div className={styles.content}>
					<Releases />
				</div>
			</div>
		);
	}
}
