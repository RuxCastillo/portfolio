import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import MenuIcon from '../Icons/MenuIcon';
import { useState, useEffect } from 'react';
import CloseIcon from '../Icons/CloseIcon';
import { motion } from 'framer-motion';

export default function NavBar(): React.ReactElement {
	const [isVisibleAside, setIsVisibleAside] = useState(false);

	useEffect(() => {
		function handleResize() {
			if (window.innerWidth >= 768) setIsVisibleAside(false);
		}
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<>
			<motion.nav
				className={styles.navbar}
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<Link to="" className={styles.icon}>
					<span className={styles.llaves}>{'{'} </span>
					<span className={styles.iconR}>R</span>{' '}
					<span className={styles.llaves}>{'}'}</span>
				</Link>
				<span className={styles.span} onClick={() => setIsVisibleAside(true)}>
					<MenuIcon />
				</span>
				<ul className={styles.ul}>
					<li className={styles.li}>
						<Link to="" className={styles.link}>
							Home
						</Link>
					</li>
					<li className={styles.li}>
						<Link to="/projects" className={styles.link}>
							Projects
						</Link>
					</li>
					<li className={styles.li}>
						<Link to="/blog" className={styles.link}>
							Blog
						</Link>
					</li>
				</ul>
			</motion.nav>
			<div
				className={styles.backgroundBlack}
				style={{ display: isVisibleAside ? 'block' : 'none' }}
			></div>
			<aside
				className={`${styles.aside} ${isVisibleAside ? styles.visible : ''}`}
			>
				<nav className={styles.navAside}>
					<p className={styles.iconAside}>
						<span className={styles.llaves}>{'{'} </span>R{' '}
						<span className={styles.llaves}>{'}'}</span>
					</p>
					<CloseIcon setVisibleAside={setIsVisibleAside} />
				</nav>
				<ul className={styles.ulSideBar}>
					<li className={styles.liSideBar}>
						<Link
							to=""
							className={styles.link}
							onClick={() => setIsVisibleAside(false)}
						>
							Home
						</Link>
					</li>
					<li className={styles.liSideBar}>
						<Link
							to="/projects"
							className={styles.link}
							onClick={() => setIsVisibleAside(false)}
						>
							Projects
						</Link>
					</li>
					<li className={styles.liSideBar}>
						<Link
							to="/blog"
							className={styles.link}
							onClick={() => setIsVisibleAside(false)}
						>
							Blog
						</Link>
					</li>
				</ul>
			</aside>
		</>
	);
}
