import './globals.css';
import Analytics from '../components/Analytics';
import type { Metadata } from 'next';
import {Montserrat} from 'next/font/google';
import React from 'react';
import styles from './layout.module.css';

type PropsType = {
	children?: React.ReactNode,
};

const monserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
});

const Layout = ({ children }: PropsType) => (
	<html className={monserrat.variable} lang='en'>
		<body className={styles.body}>
			{children}
			<Analytics />
		</body>
	</html>
);

const SITE_AUTHOR = 'GXD Records';
const SITE_NAME = 'GXD Records';
const SITE_DESC = 'Record label from Vancouver, Canada';

export const metadata: Metadata = {
	applicationName: SITE_NAME,
	authors: [{name: SITE_AUTHOR}],
	creator: SITE_AUTHOR,
	description: SITE_DESC,
	generator: 'Next.js',
	keywords: ['gxd', 'records', 'vancouver', 'music', 'label'],
	openGraph: {
		description: SITE_DESC,
		locale: 'en-US',
		siteName: SITE_NAME,
		title: SITE_NAME,
		type: 'website',
	},
	publisher: SITE_AUTHOR,
	themeColor: '#222',
	title: SITE_NAME,
};

export default Layout;
