import styles from './About Me.module.css';
import foto from '../../assets/foto retocada.png';

export default function AboutMe(): React.ReactElement {
	return (
		<section className={styles.aboutMe}>
			<div className={styles.aboutMe__text}>
				<h3 className={styles.aboutMe__h3}>⚡ About me</h3>
				<p>
					I've been passionate about programming since I discovered it at a
					young age.
				</p>
				<br />
				<p>
					I love building <span className={styles.green}>web applications</span>
					, which is what I've been specializing in. Exploring new technologies
					and programming languages excites me, and I had the privilege of doing
					an <span>internship at Itransition</span>, where I learned a lot and
					implemented new ideas—that experience made me enjoy{' '}
					<span className={styles.green}>web development</span> even more. The
					ability to create <span className={styles.green}>interactive</span>{' '}
					and
					<span className={styles.green}>accessible solutions</span> that anyone
					can use is what drew me to the web in the first place.
				</p>

				<br />
				<p>
					When I'm not coding, I enjoy watching movies and anime. I also have a
					gaming PC where I spend time playing my favorite games. 🎮
				</p>
			</div>
			<div className={styles.aboutMe__img}>
				<div className={styles.aboutMe__div}>
					<img src={foto} alt="" className={styles.img} />
					<img
						src="https://svgsilh.com/svg/26432.svg"
						alt=""
						className={styles.img__squares}
					/>
				</div>
			</div>
		</section>
	);
}
