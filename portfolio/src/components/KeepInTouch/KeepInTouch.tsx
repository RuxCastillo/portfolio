import { useRef } from 'react';
import styles from './KeepInTouch.module.css';
import { useInView, motion } from 'framer-motion';

export default function KeepInTouch() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<section className={styles.section}>
			<motion.div
				ref={ref}
				initial={{ y: 100, opacity: 0 }}
				animate={isInView ? { y: 0, opacity: 1 } : {}}
				transition={{ duration: 0.5 }}
			>
				{' '}
				<h5 className={styles.h5}>Keep In Touch.</h5>
				<p className={styles.p}>
					I'm currently specializing in{' '}
					<span className={styles.green}>Full-stack Development</span>
				</p>
				<p className={styles.p}>
					Feel free to get in touch and talk more about your projects.
				</p>
			</motion.div>
		</section>
	);
}
