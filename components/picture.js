import React, { Component } from 'react';

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
			this.ref.current.addAttribute("data-loaded");
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
			<picture className={this.props.className} ref={this.ref}>
				<source srcset={this.props.optimized}></source>
				{ /* only add <img> when we scroll towards it */ }
			</picture>
		);
	}
}

export default Picture;
