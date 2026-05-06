import styles from './Icon.module.css';

interface IconProps {
	icon: React.ReactElement;
	text: string;
	href: string;
}

export default function Icon({ icon, text, href }: IconProps) {
	const isExternal = href.startsWith('http');

	return (
		<a
			className={styles.icon}
			href={href}
			{...(isExternal && {
				target: '_blank',
				rel: 'noopener noreferrer',
			})}
			aria-label={text}
		>
			{icon}
			<span>{text}</span>
		</a>
	);
}
