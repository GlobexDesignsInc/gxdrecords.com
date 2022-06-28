// @flow strict

import React, {type Element} from 'react';
import Image from 'next/future/image';
import logoImage from '../public/logo.png';
import Releases from '../components/Releases';
import styles from './index.module.css';

const index = (): Element<'div'> => (
	<div className={styles.view}>
		<div className={styles.header}>
			<Image
				alt='GXD Records'
				height='165'
				placeholder='blur'
				src={logoImage}
				width='196' />
		</div>
		<div className={styles.content}>
			<Releases />
		</div>
	</div>
);

export default index;
