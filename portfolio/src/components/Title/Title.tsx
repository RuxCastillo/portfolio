import styles from './Title.module.css';

export default function Title(): React.ReactElement {
	return (
		<header className={styles.header}>
			{' '}
			<div className={styles.title}>
				<span className={styles.title__pre}>Hey there!, I'm-</span>
				<h1 className={styles.title__h1}>Ruben Lopez C.</h1>
				<img
					src="https://svgsilh.com/svg/26432.svg"
					alt=""
					className={styles.title__img}
				/>
			</div>
			<h2 className={styles.h2}>
				<span className={styles.h2__span}>Web Developer.</span> I enjoy turning
				ideas into functional and elegant web experiences.
			</h2>
			<div className={styles.about}>
				<span>🚀 Currently specializing in Full-stack</span>
				<br />
				<span>
					⚡ Web Developer Internship at{' '}
					<span className={styles.about__span}> Itransition</span>
				</span>
			</div>
			<div className={styles.icons}>
				<div className={styles.icon}>Github</div>
				<div className={styles.icon}>LinkedIn</div>
				<div className={styles.icon}>Email</div>
			</div>
		</header>
	);
}
