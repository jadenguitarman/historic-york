import styles from '../styles/thank-you.module.css';
import Nav from "../components/nav.js";
import Picture from "../components/picture.js";

const Contact = () => {
	return (
		<main className={styles.main}>
			<section id={styles.intro}>
				<Nav />

				<h1>Thanks for contacting us!</h1>
				<p>We'll make sure to contact you back right away.</p>
				<p>While you wait, why not check out some of the buildings we've saved or helped to save over the years?</p>

				<div id={styles.grid}>
					{[
						['/horatio-gates.jpeg', "General Horation Gates House"],
						['/church.jpg', "A church"],
						['/central-market.jpeg', "Central Market"],
						['/schmidt.jpg', "John and Anna Schmidt House"],
						['/hanover-junction.webp', "Hanover Junction"],
						['/schultz.jpg', "Johannes and Christina Schultz House"]
					].map(([path, title], i) => (
						<div key={"image-" + i} className={styles.imageContainer}>
							<Picture
								optimized={path}
								alt={title} />
							<span>{title}</span>
						</div>
					))}
				</div>
			</section>
		</main>
	);
};

export default Contact;
