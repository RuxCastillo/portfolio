import ProjectCard from '../ProjectCard/ProjectCard';
import NodeTag from '../Tags/NodeTag/NodeTag';
import ReactTag from '../Tags/ReactTag/ReactTag';
import styles from './Projects.module.css';
import { Search } from 'lucide-react';
import itbsImg from '../../assets/itbs app.png';

export default function Projects() {
	return (
		<section className={styles.section}>
			<div className={styles.header}>
				<h1 className={styles.h1}>Projects</h1>
				<p className={styles.header__p}>
					I love building projects and practice my engineering skills, here's an
					archive of things that i've worked on.
				</p>
				<div className={styles.search}>
					<input
						className={styles.search__input}
						type="text"
						placeholder="Search projects"
					/>
					<Search size={19} />
				</div>
			</div>
			<div className={styles.body}>
				<ProjectCard
					title="ITBS App"
					text="Human resources app"
					tech1={<ReactTag />}
					tech2={<NodeTag />}
					img={itbsImg}
				/>
			</div>
		</section>
	);
}
