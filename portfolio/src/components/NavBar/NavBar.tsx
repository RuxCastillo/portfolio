import { useNavigate } from 'react-router-dom';
import styles from './NavBar.module.css';
import MenuIcon from '../Icons/MenuIcon';
import { useState, useEffect } from 'react';
import CloseIcon from '../Icons/CloseIcon';

export default function NavBar(): React.ReactElement {
	const navigate = useNavigate();
	const [isVisibleAside, setIsVisibleAside] = useState(false);

	useEffect(() => {
		function handleResize() {
			if (window.innerWidth >= 768) setIsVisibleAside(false);
		}
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	function handleClickLi(str: string) {
		navigate(str);
	}

	return (
		<>
			<nav className={styles.navbar}>
				<p className={styles.icon}>
					<span className={styles.llaves}>{'{'} </span>R{' '}
					<span className={styles.llaves}>{'}'}</span>
				</p>
				<span className={styles.span} onClick={() => setIsVisibleAside(true)}>
					<MenuIcon />
				</span>
				<ul className={styles.ul}>
					<li className={styles.li} onClick={() => handleClickLi('')}>
						Home
					</li>
					<li className={styles.li} onClick={() => handleClickLi('/projects')}>
						Projects
					</li>
					<li className={styles.li} onClick={() => handleClickLi('/blog')}>
						Blog
					</li>
				</ul>
			</nav>
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
			</aside>
		</>
	);
}
