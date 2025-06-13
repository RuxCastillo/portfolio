import { Link } from 'react-router-dom';
import itbsAppImg from '../../assets/itbs app.png';
import Link2Icon from '../Icons/Link2Icon';
import styles from './CreativeWorks.module.css';

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
			<div className={styles.container}>
				<div className={styles.divImg}>
					<img src={itbsAppImg} alt="" className={styles.img} />
				</div>
				<div className={styles.textContainer}>
					<div className={styles.textContainer__top}>
						<div className={styles.textContainer__titulo}>
							<h4 className={styles.textContainer__tituloH4}>Titulo</h4>
							<Link2Icon />
						</div>
						<div className={styles.textContainer__tecnologias}>
							<div>Javascript</div>
							<div>Sass</div>
						</div>
					</div>
					<div className={styles.textContainer__bottom}>
						<p className={styles.textContainer__bottomP}>
							A website that provides roadmap for various fields in Programming
							and help people learn to code for free
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
