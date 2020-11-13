import '../styles/index.css'
import { withTina } from 'tinacms'
import { MarkdownFieldPlugin } from 'react-tinacms-editor'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
	const router = useRouter()
	console.log(router.query);
	return <Component {...pageProps} />
}

export default withTina(MyApp, {
	enabled: true,
	sidebar: true,
	plugins: [MarkdownFieldPlugin],
})
