import styles from '../styles/about.module.css';
import Button from "../components/button.js";
import Nav from "../components/nav.js";
import Picture from "../components/picture.js";

const About = () => {
	return (
		<main className={styles.main}>
			<section id={styles.intro}>
				<Nav />

				<p>Historic York is a non-profit organization dedicated to the renovation, preservation and rehabilitation of the architecture of York County.</p>

				<div id={styles.columnContainer}>
					<div>
						<p className={"autodidact"}>Preserving our future by protecting our past</p>

						<p>Historic York Inc. was founded in 1975 during an effort to save one building from demolition. Since then, the organization has grown in scope and continues to support architectural preservation, rehabilitation, and adaptive reuse of historic properties throughout York County and beyond.</p>

						<p>Historic York, Inc. serves as a community voice for the protection of historic buildings and sites. We provide the expertise, motivation and inspiration to preserve the architecture of York County and beyond. We identify, preserve, and protect buildings, structures and sites of historical and architectural significance in York County, Pennsylvania. Historic York, Inc. has played roles in local preservation projects including the Cookes, Willis, Kirk and Forrey Houses, as well as the Haines Shoe House, Farquhar Park Bandstand and the Hanover Junction Railroad Station.</p>

						<p>We advocate historic preservation, provide community education and assist local individuals, organizations and public officials with preservation related activities.</p>

						<p>Join our mailing list by sending an email to info@historicyork.org.</p>

						<p>Donations are always welcome! Please help support the mission of Historic York, Inc. today. Visit our Membership page to make a donation, today!!</p>
					</div>

					<div id={styles.right}>
						<Picture
							loading="eager"
							optimized="/hanover-junction.webp"
							backup="/hanover-junction.jpg"
							alt="Hanover Junction" />
						<span className={"autodidact"}>Hanover Junction, a historical building we've played a part in saving</span>
					</div>
				</div>
			</section>
		</main>
	);
};

export default About;
