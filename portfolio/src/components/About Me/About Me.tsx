import styles from './About Me.module.css';
import foto from '../../assets/foto retocada.png';

export default function AboutMe(): React.ReactElement {
	return (
		<section className={styles.aboutMe}>
			<div className={styles.aboutMe__text}>
				<h3>⚡ About me</h3>
				<p>
					Hey! I'm Rafael Ceja Bravo. I've been passionate about programming
					since I discovered it at a young age.
				</p>
				<br />
				<p>
					I love building web applications, which is what I've been specializing
					in. Exploring new technologies and programming languages excites me,
					and I had the privilege of doing an internship at Itransition, where I
					learned a lot and implemented new ideas—that experience made me enjoy
					web development even more. The ability to create interactive and
					accessible solutions that anyone can use is what drew me to the web in
					the first place.
				</p>

				<br />
				<p>
					When I'm not coding, I enjoy watching movies and anime. I also have a
					gaming PC where I spend time playing my favorite games. 🎮
				</p>
			</div>
			<div className={styles.aboutMe__img}>
				<img src={foto} alt="" className={styles.img} />
			</div>
		</section>
	);
}
