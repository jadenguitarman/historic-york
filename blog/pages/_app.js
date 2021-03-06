import '../styles/index.css'
import { withTina } from 'tinacms'
import { MarkdownFieldPlugin } from 'react-tinacms-editor'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
	const router = useRouter()
	return <Component {...pageProps} />
}

export default withTina(MyApp, {
	enabled: false,
	sidebar: false,
	plugins: [MarkdownFieldPlugin],
})
