import styles from '../styles/contact.module.css';
import Button from "../components/button.js";
import Nav from "../components/nav.js";

const Contact = () => {
	return (
		<main className={styles.main}>
			<section id={styles.intro}>
				<Nav />

				<h1>We'd love to hear from you!</h1>
				<p>We're always ready to speak with our neighbors about our city and its amazing historical architecture.</p>

				<div className={styles.contactInfo}>
					<div>
						<h2>Address</h2>
						<p>25 North Duke Street</p>
						<p>York, Pennsylvania 17401</p>
					</div>

					<div>
						<h2>Phone</h2>
						<p><a href="tel:7178430320">(717) 843-0320</a></p>
					</div>

					<div>
						<h2>Email</h2>
						<p><a href="mailto:info@historicyork.org">info@historicyork.org</a></p>
					</div>
				</div>

				<div>
					<h2>Or, get in touch with the form below.</h2>

					<form
						name="contact"
						id={styles.form}
						data-netlify="true"
						action="/"
						method="POST"
						netlify-honeypot="bot-field">
						<div>
							<input
								type="text"
								name="email"
								placeholder="Your Email" />
							<input
								type="text"
								name="name"
								placeholder="Your Name" />
						</div>

						<div>
							<h3>Your Message</h3>
							<textarea name="message"></textarea>
						</div>

						<input name="bot-field" />
					</form>

					<Button
						text="Send Message"
						onClick={() => {
							let xhttp = new XMLHttpRequest();
							xhttp.open('POST', "/", true);
							xhttp.onreadystatechange = resp => {
								if (xhttp.readyState === XMLHttpRequest.DONE && xhttp.status === 200) {
									location.href = "/thank-you";
								}
							};
							xhttp.send(new FormData(document.getElementById(styles.form)));
						}}
						filled />
				</div>

				<div className={styles.board}>
					<h2>Board Members</h2>
					<p>We appreciate the contributions and effort of our board members. Contact us if you're interested in becoming one.</p>
					{ null /* to whoever is looking at this code, I would prefer to have a grid with all of the board members, like https://www.stackbit.com/about/, but maybe a diamond grid*/ }
					<ul>
						<li>Matt Gallagher, Chair</li>
						<li>Frank Iati, Vice-Chair/Treasurer</li>
						<li>Joe Jefcoat, Secretary</li>
						<li>Scott Butcher</li>
						<li>Fred Cluck</li>
						<li>James Coombes</li>
						<li>John Fox</li>
						<li>Christian Miller</li>
						<li>Brian Ports</li>
						<li>Becky Roman</li>
					</ul>
				</div>
			</section>
		</main>
	);
};

export default Contact;
