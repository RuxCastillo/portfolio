import { Search } from 'lucide-react';
import styles from './Blog.module.css';

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
			<div className={styles.body}></div>
		</section>
	);
}
