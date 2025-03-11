import NavBar from './components/NavBar/NavBar';
import Title from './components/Title/Title';
//import './App.css';
import styles from './App.module.css';

function App() {
	return (
		<>
			<NavBar />
			<main className={styles.main}>
				<Title />
			</main>
		</>
	);
}

export default App;
