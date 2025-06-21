import styles from './Icon.module.css';

interface IconProps {
	icon: React.ReactElement;
	text: string;
}

export default function Icon({ icon, text }: IconProps) {
	return (
		<div className={styles.icon}>
			{icon}
			<span>{text}</span>
		</div>
	);
}
