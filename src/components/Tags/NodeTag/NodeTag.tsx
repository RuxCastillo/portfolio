import { FaNodeJs } from 'react-icons/fa';
import styles from './NodeTag.module.css';

export default function NodeTag() {
	return (
		<div className={`${styles.iconSpan} ${styles.nodeIcon}`}>
			<FaNodeJs />
			<span>Node</span>
		</div>
	);
}
