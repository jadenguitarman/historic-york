import '../styles/globals.css';
import Head from 'next/head';

const HistoricYork = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<title>Historic York</title>
			</Head>
			<Component {...pageProps}/>
		</>
	);
};

export default HistoricYork;
