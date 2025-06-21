import EmailIcon from '../Icons/EmailIcon';
import GithubIcon from '../Icons/GithubIcon';
import styles from './Title.module.css';
import LinkedInIcon from '../Icons/LinkedInIcon';
import { motion } from 'framer-motion';

export default function Title(): React.ReactElement {
	return (
		<header className={styles.header}>
			{' '}
			<motion.div
				className={styles.title}
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.5 }}
			>
				<span className={styles.title__pre}>Hey there!, I'm-</span>
				<h1 className={styles.title__h1}>Ruben Lopez C.</h1>
				<img
					src="https://svgsilh.com/svg/26432.svg"
					alt=""
					className={styles.title__img}
				/>
			</motion.div>
			<motion.h2
				className={styles.h2}
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.6 }}
			>
				<span className={styles.h2__span}>Web Developer.</span> I enjoy turning
				ideas into functional and elegant web experiences.
			</motion.h2>
			<motion.div
				className={styles.about}
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.7 }}
			>
				<span>🚀 Currently specializing in Full-stack</span>
				<br />
				<span>
					⚡ Web Developer at <span className={styles.about__span}> ITBS</span>
				</span>
			</motion.div>
			<motion.div
				className={styles.icons}
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.8 }}
			>
				<div className={styles.icon}>
					<GithubIcon />
					<span>Github</span>
				</div>
				<div className={styles.icon}>
					<LinkedInIcon />
					<span>LinkedIn</span>
				</div>
				<div className={styles.icon}>
					<EmailIcon />
					<span>Email</span>
				</div>
			</motion.div>
		</header>
	);
}
