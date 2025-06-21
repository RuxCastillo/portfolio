import { Link } from 'react-router-dom';
import ElementLatestArticle from './ElementLatestArticle';
import styles from './LatestArticle.module.css';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';

export default function LatestArticle() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<section className={styles.section}>
			<motion.div
				className={styles.div}
				ref={ref}
				initial={{ y: 100, opacity: 0 }}
				animate={isInView ? { y: 0, opacity: 1 } : {}}
				transition={{ duration: 0.5 }}
			>
				<h3 className={styles.h3}>📰Latest Article</h3>
				<Link to={'/blog'} className={styles.link}>
					View all articles →
				</Link>
			</motion.div>
			<ElementLatestArticle
				title="2024 Retrospective"
				date="January 21 2025"
				time="6 min read"
			/>
		</section>
	);
}
