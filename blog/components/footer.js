import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
	return (
		<footer className="bg-accent-1 border-t border-accent-2">
			<Container>
				<div className="py-5 flex flex-col items-center">
					<h3 className="text-2xl text-center tracking-tighter">
						Created by <a href="https://jaden.baptista.dev" className="underline">Jaden Baptista</a>. Copyright 2020.
					</h3>
				</div>
			</Container>
		</footer>
	)
}
