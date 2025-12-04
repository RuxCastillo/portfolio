import { useRef } from 'react';
import styles from './ElementLatestArticle.module.css';
import { useInView, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ElementLatestArticleProps {
	title: string;
	date: string;
	time: string;
	url: string;
}

export default function ElementLatestArticle({
	title,
	date,
	time,
	url,
}: ElementLatestArticleProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<motion.div
			ref={ref}
			initial={{ y: 100, opacity: 0 }}
			animate={isInView ? { y: 0, opacity: 1 } : {}}
			transition={{ duration: 0.5, delay: 0.5 }}
		>
			<Link to={url} className={styles.container}>
				<h4 className={styles.h4}>{title}</h4>
				<p className={styles.p}>
					{date} • {time}
				</p>
			</Link>
		</motion.div>
	);
}
