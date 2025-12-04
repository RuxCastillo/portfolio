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
					titulo="ITBS App"
					text="Human resources app"
					tecnologia1={<ReactTag />}
					tecnologia2={<NodeTag />}
					img={itbsImg}
					link="projects"
				/>
				{/* 				<ProjectCard
					titulo="ITBS App"
					text="Aplicacion para checar al personal"
					tecnologia1={<ReactTag />}
					tecnologia2={<NodeTag />}
					img={itbsImg}
					link="projects"
				/>
				<ProjectCard
					titulo="ITBS App"
					text="Aplicacion para checar al personal"
					tecnologia1={<ReactTag />}
					tecnologia2={<NodeTag />}
					img={itbsImg}
					link="projects"
				/> */}
			</div>
		</section>
	);
}
