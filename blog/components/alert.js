import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Alert({ preview }) {
	return (
		<div>
			<Container>
				<div className="py-2 text-center text-sm flex justify-around">
					<a
						href="https://historic-york.baptista.dev"
						className="no-underline p-2"
					>Home</a>
					<a
						href="https://historic-york.baptista.dev/donate"
						className="no-underline p-2"
					>Donate</a>
					<a
						href="https://historic-york.baptista.dev/about"
						className="no-underline p-2"
					>About</a>
					<a
						href="https://historic-york.baptista.dev/contact"
						className="no-underline p-2"
					>Contact</a>
					<a
						href="https://blog.historic-york.baptista.dev"
						className="no-underline p-2"
					>Blog</a>
				</div>
			</Container>
		</div>
	)
}
