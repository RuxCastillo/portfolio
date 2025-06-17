import styles from './ProjectCard.module.css';
import itbsAppImg from '../../assets/itbs app.png';
import Link2Icon from '../Icons/Link2Icon';
import ReactTag from '../Tags/ReactTag/ReactTag';
import NodeTag from '../Tags/NodeTag/NodeTag';

export default function ProjectCard() {
	return (
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
						<ReactTag />
						<NodeTag />
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
	);
}
