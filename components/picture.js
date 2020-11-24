import React, { Component } from 'react';
import styles from '../styles/picture.module.css';

/* use like this:
	<Picture
		loading="eager" // leave this out for lazy loading
		optimized="/path/to/image.webp"
		backup="/path/to/image.jpg"
		alt="Description of the image"
		className="class-passed-down-to-picture"
	/>
// */

class Picture extends Component {
	constructor (props) {
		super(props);
		this.ref = React.createRef();
	}

	async componentDidMount () {
		let img = document.createElement("img");
		img.src = this.props.backup;
		img.alt = this.props.alt;

		if (this.props.loading == "eager") {
			this.ref.current.appendChild(img);
			this.ref.current.setAttribute("data-loaded", "loaded");
		} else {
			(new IntersectionObserver(entries => {
				entries.forEach(entry => {
					if (
						entry.isIntersecting
						&& !this.ref.current.hasAttribute("data-loaded")
					) {
						this.ref.current.appendChild(img);
						this.ref.current.setAttribute("data-loaded", "true");
					}
				}, {rootMargin: "50px"});
			})).observe(this.ref.current);
		}
	}

	render () {
		return (
			<picture className={`${this.props.className || ""} ${styles.picture}`} ref={this.ref}>
				<source srcSet={this.props.optimized}></source>
				{ /* only add <img> when we scroll towards it */ }
			</picture>
		);
	}
}

export default Picture;
