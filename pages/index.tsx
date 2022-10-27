import Image from 'next/image';
import logoImage from '../public/logo.png';
import React from 'react';
import Releases from '../components/Releases';
import styles from './index.module.css';

const index = () => (
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
