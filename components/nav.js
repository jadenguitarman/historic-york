import styles from "../styles/nav.module.css";
import Logo from "../components/logo.js";

const openNav = e => {
	document.getElementById(styles.nav).children[0].classList.add(styles.hidden);
};

const Nav = () => {
	return (
		<div id={styles.nav}>
			<Logo />

			<nav>
				<svg viewBox="0 0 51 45" onClick={openNav}>
					<rect
						width="51"
						height="7"
						rx="3.5" />
					<rect
						width="51"
						height="7"
						rx="3.5"
						transform="translate(0 19)" />
					<rect
						width="26"
						height="7"
						rx="3.5"
						transform="translate(25 38)" />
				</svg>

				<a href="/">Home</a>
				<a href="/about">About</a>
				<a href="/donate">Donate</a>
				<a href="/contact">Contact</a>
				<a href="https://blog.historic-york.baptista.dev">Blog</a>
			</nav>
		</div>
	);
};

export default Nav;
