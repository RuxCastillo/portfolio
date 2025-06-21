import styles from './ProjectCard.module.css';
import Link2Icon from '../Icons/Link2Icon';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProjectCardPros {
	text: string;
	titulo: string;
	link: string;
	tecnologia1: React.ReactElement;
	tecnologia2?: React.ReactElement;
	tecnologia3?: React.ReactElement;
	img: string;
}

export default function ProjectCard({
	text,
	titulo,
	link,
	tecnologia1,
	tecnologia2,
	tecnologia3,
	img,
}: ProjectCardPros) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const navigate = useNavigate();

	return (
		<motion.div
			className={styles.container}
			ref={ref}
			initial={{ y: 100, opacity: 0 }}
			animate={isInView ? { y: 0, opacity: 1 } : {}}
			transition={{ duration: 0.5, delay: 0.5 }}
			onClick={() => navigate(link)}
		>
			<div className={styles.divImg}>
				<img src={img} alt="" className={styles.img} />
			</div>
			<div className={styles.textContainer}>
				<div className={styles.textContainer__top}>
					<div className={styles.textContainer__titulo}>
						<h4 className={styles.textContainer__tituloH4}>{titulo}</h4>
						<Link2Icon />
					</div>
					<div className={styles.textContainer__tecnologias}>
						{tecnologia1}
						{tecnologia2}
						{tecnologia3}
					</div>
				</div>
				<div className={styles.textContainer__bottom}>
					<p className={styles.textContainer__bottomP}>{text}</p>
				</div>
			</div>
		</motion.div>
	);
}
