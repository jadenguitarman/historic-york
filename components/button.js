import styles from "../styles/button.module.css";

const Button = ({text, onClick, filled, className}) => {
	return (
		<button
			className={`
				${styles.button}
				${filled ? styles.filled : ""}
				${className}
			`}
			onClick={onClick}
		>{text}</button>
	);
};

export default Button;
