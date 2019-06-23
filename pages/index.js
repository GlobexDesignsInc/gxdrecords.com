// @flow

import React, {type Element} from 'react';
import Releases from '../components/Releases';
import styles from './index.css';

const index = (): Element<'div'> => (
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

index.displayName = 'index';

export default index;
