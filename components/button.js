import styles from "../styles/button.module.css";

const Button = ({text, callback, filled, className}) => {
	return (
		<button
			className={`
				${styles.button}
				${filled ? styles.filled : ""}
				${className}
			`}
			onClick={callback}
		>{text}</button>
	);
};

export default Button;
