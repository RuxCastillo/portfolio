import styles from './ProjectCard.module.css';
import Link2Icon from '../Icons/Link2Icon';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';

interface ProjectCardProps {
	text: string;
	title: string;
	tech1: React.ReactElement;
	tech2?: React.ReactElement;
	tech3?: React.ReactElement;
	img: string;
	repoUrl?: string;
	liveUrl?: string;
}

export default function ProjectCard({
	text,
	title,
	tech1,
	tech2,
	tech3,
	img,
	repoUrl,
	liveUrl,
}: ProjectCardProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const primaryUrl = liveUrl ?? repoUrl;

	return (
		<motion.div
			className={styles.container}
			ref={ref}
			initial={{ y: 100, opacity: 0 }}
			animate={isInView ? { y: 0, opacity: 1 } : {}}
			transition={{ duration: 0.5, delay: 0.5 }}
		>
			<div className={styles.imgWrapper}>
				<img src={img} alt={`${title} preview`} className={styles.img} />
			</div>
			<div className={styles.textContainer}>
				<div className={styles.textContainer__top}>
					<div className={styles.textContainer__title}>
						<h4 className={styles.textContainer__titleH4}>{title}</h4>
						{primaryUrl && (
							<a
								href={primaryUrl}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`Open ${title}`}
							>
								<Link2Icon />
							</a>
						)}
					</div>
					<div className={styles.textContainer__techs}>
						{tech1}
						{tech2}
						{tech3}
					</div>
				</div>
				<div className={styles.textContainer__bottom}>
					<p className={styles.textContainer__bottomP}>{text}</p>
				</div>
			</div>
		</motion.div>
	);
}
