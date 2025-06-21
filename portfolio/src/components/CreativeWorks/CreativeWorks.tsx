import { Link } from 'react-router-dom';
import styles from './CreativeWorks.module.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';

export default function CreativeWorks() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<section className={styles.section}>
			<motion.div
				className={styles.header}
				ref={ref}
				initial={{ y: 100, opacity: 0 }}
				animate={isInView ? { y: 0, opacity: 1 } : {}}
				transition={{ duration: 0.5 }}
			>
				<div className={styles.header__top}>
					<h3 className={styles.header__topH3}>All Creative Works.</h3>
					<Link to="/projects" className={styles.header__link}>
						Explore more →
					</Link>
				</div>
				<p className={styles.headerP}>
					Here's some of my projects that i have worked on.
				</p>
				<Link to="/projects" className={styles.header__link2}>
					Explore more →
				</Link>
			</motion.div>
			<ProjectCard />
			<div className={styles.cardEnMedio}></div>
		</section>
	);
}
