import { Search } from 'lucide-react';
import styles from './Blog.module.css';
import BlogElement from './BlogElement/BlogElement';

const blogs = [
	{
		title: 'My First Job as a Full Stack Software Developer',
		fecha: 'August 1, 2025',
		tiempoDeLeer: '6 min',
		about:
			'How I went from being an intern to becoming a full-time employee, and the most ambitious project I had built up to that moment.',
		id: 'my-first-job',
	},
];

export default function Blog() {
	return (
		<section className={styles.section}>
			<div className={styles.header}>
				<h1 className={styles.h1}>Blog</h1>
				<p className={styles.header__p}>
					This is where I share my writings on programming, tutorials, and my
					experiences.
				</p>
				<div className={styles.search}>
					<input
						className={styles.search__input}
						type="text"
						placeholder="Search articles"
					/>
					<Search size={19} />
				</div>
			</div>
			<div className={styles.body}>
				{blogs.map((blog) => (
					<BlogElement blog={blog} />
				))}
			</div>
		</section>
	);
}
