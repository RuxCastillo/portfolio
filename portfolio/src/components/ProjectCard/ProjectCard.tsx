import styles from './ProjectCard.module.css';
import itbsAppImg from '../../assets/itbs app.png';
import Link2Icon from '../Icons/Link2Icon';
import ReactTag from '../Tags/ReactTag/ReactTag';
import NodeTag from '../Tags/NodeTag/NodeTag';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';

export default function ProjectCard() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<motion.div
			className={styles.container}
			ref={ref}
			initial={{ y: 100, opacity: 0 }}
			animate={isInView ? { y: 0, opacity: 1 } : {}}
			transition={{ duration: 0.5 }}
		>
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
		</motion.div>
	);
}
