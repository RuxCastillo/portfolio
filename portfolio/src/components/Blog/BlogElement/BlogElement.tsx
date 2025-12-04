import { Link } from 'react-router-dom';
import styles from './BlogElement.module.css';

interface BlogI {
	title: string;
	fecha: string;
	tiempoDeLeer: string;
	about: string;
	id: string;
}

export default function BlogElement({ blog }: { blog: BlogI }) {
	return (
		<Link to={`/blog/${blog.id}`} className={styles.container}>
			<div className={styles.meta}>
				<p>{blog.fecha}</p>
				<p>{blog.tiempoDeLeer} read</p>
			</div>
			<div className={styles.text}>
				<h2 className={styles.title}>{blog.title}</h2>
				<p className={styles.p}>{blog.about}</p>
				<Link to={`/blog/${blog.id}`} className={styles.link}>
					Learn more →
				</Link>{' '}
			</div>
		</Link>
	);
}
