import { Link } from 'react-router-dom';
import ElementLatestArticle from './ElementLatestArticle';
import styles from './LatestArticle.module.css';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';

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
				transition={{ duration: 0.5, delay: 0.5 }}
			>
				<h3 className={styles.h3}>📰Latest Article</h3>
				<Link to={'/blog'} className={styles.link}>
					View all articles →
				</Link>
			</motion.div>
			<ElementLatestArticle
				title={blogs[0].title}
				date={blogs[0].fecha}
				time={`${blogs[0].tiempoDeLeer} read`}
				url={`/blog/${blogs[0].id}`}
			/>
		</section>
	);
}
