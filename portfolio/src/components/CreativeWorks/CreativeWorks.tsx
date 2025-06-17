import { Link } from 'react-router-dom';
import styles from './CreativeWorks.module.css';
import ProjectCard from '../ProjectCard/ProjectCard';

export default function CreativeWorks() {
	return (
		<section className={styles.section}>
			<div className={styles.header}>
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
			</div>
			<ProjectCard />
			<div className={styles.cardEnMedio}>
				<ProjectCard />
			</div>
			<ProjectCard />
		</section>
	);
}
