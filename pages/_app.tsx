import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import type { AppProps } from 'next/app';
import ToastProvider from '../helpers/ToasterService';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ToastProvider>
			<Component {...pageProps} />
		</ToastProvider>
	)
}
