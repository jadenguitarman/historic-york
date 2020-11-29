import styles from '../styles/index.module.css';
import Button from "../components/button.js";
import Nav from "../components/nav.js";

const Index = () => {
	return (
		<main className={styles.main}>
			<section id={styles.intro}>
				<Nav />

				<div className={styles.mobile_spacer}></div>

				<h1>Historic York</h1>

				<div id={styles.bottom}>
					<div id={styles.buttons}>
						<Button
							text="Donate"
							onClick={() => location.href = "/donate"}
							filled />
						<Button
							text="Contact"
							onClick={() => location.href = "/contact"} />
					</div>

					<Button
						text="Our Mission"
						onClick={() => location.href = "/about"}
						className={styles.mission_button} />

					<div className={styles.mobile_spacer}></div>

					<p className="autodidact">
						<span>Preserving our future</span>
						<span>by protecting our past</span>
						<span><a href="/about">Learn more...</a></span>
					</p>
				</div>
			</section>
		</main>
	);
};

export default Index;
