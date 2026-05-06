import { Link } from 'react-router-dom';
import styles from './BlogElement.module.css';

interface BlogPreview {
	title: string;
	date: string;
	readTime: string;
	about: string;
	id: string;
}

export default function BlogElement({ blog }: { blog: BlogPreview }) {
	return (
		<Link to={`/blog/${blog.id}`} className={styles.container}>
			<div className={styles.meta}>
				<p>{blog.date}</p>
				<p>{blog.readTime} read</p>
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
