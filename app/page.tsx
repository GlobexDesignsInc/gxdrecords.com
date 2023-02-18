import Image from 'next/image';
import logoImage from '../public/logo.png';
import React from 'react';
import Releases from '../components/Releases';
import styles from './page.module.css';

const Index = () => (
	<div className={styles.view}>
		<div className={styles.header}>
			<Image
				alt='GXD Records'
				height='165'
				src={logoImage}
				width='196' />
		</div>
		<div className={styles.content}>
			<Releases />
		</div>
	</div>
);

export default Index;
