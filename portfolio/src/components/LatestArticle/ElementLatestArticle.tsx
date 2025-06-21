import { useRef } from 'react';
import styles from './ElementLatestArticle.module.css';
import { useInView, motion } from 'framer-motion';

interface ElementLatestArticleProps {
	title: string;
	date: string;
	time: string;
}

export default function ElementLatestArticle({
	title,
	date,
	time,
}: ElementLatestArticleProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<motion.div
			className={styles.container}
			ref={ref}
			initial={{ y: 100, opacity: 0 }}
			animate={isInView ? { y: 0, opacity: 1 } : {}}
			transition={{ duration: 0.5, delay: 0.5 }}
		>
			<h4 className={styles.h4}>{title}</h4>
			<p className={styles.p}>
				{date} • {time}
			</p>
		</motion.div>
	);
}
