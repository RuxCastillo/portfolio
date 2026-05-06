import ReactIcon from '../../Icons/ReactIcon';
import styles from './ReactTag.module.css';

export default function ReactTag() {
	return (
		<div className={`${styles.iconSpan} ${styles.reactIcon}`}>
			<ReactIcon />
			<span>React</span>
		</div>
	);
}
