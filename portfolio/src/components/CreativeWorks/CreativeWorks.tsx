import { Link } from 'react-router-dom';
import styles from './CreativeWorks.module.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import ReactTag from '../Tags/ReactTag/ReactTag';
import NodeTag from '../Tags/NodeTag/NodeTag';
import itbsImg from '../../assets/itbs app.png';

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
				transition={{ duration: 0.5, delay: 0.5 }}
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
			<ProjectCard
				title="ITBS App"
				text="Human resources app"
				tech1={<ReactTag />}
				tech2={<NodeTag />}
				img={itbsImg}
			/>
			<div className={styles.cardMiddle}></div>
		</section>
	);
}
