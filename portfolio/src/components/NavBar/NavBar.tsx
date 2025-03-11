import styles from './NavBar.module.css';

export default function NavBar(): React.ReactElement {
	return (
		<nav className={styles.navbar}>
			<p className={styles.icon}>
				<span className={styles.llaves}>{'{'} </span>R{' '}
				<span className={styles.llaves}>{'}'}</span>
			</p>
			<span>menu</span>
			<ul className={styles.ul}>
				<li>Home</li>
				<li>Projects</li>
				<li>Blog</li>
			</ul>
		</nav>
	);
}
