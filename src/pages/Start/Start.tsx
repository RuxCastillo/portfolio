import { Outlet } from 'react-router-dom';
import styles from '../../components/Home/Home.module.css';
import NavBar from '../../components/NavBar/NavBar';

export default function Start() {
	return (
		<>
			<NavBar />
			<main className={styles.main}>
				<Outlet />
			</main>
		</>
	);
}
