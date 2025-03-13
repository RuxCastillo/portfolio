import NavBar from './components/NavBar/NavBar';
import Title from './components/Title/Title';
//import './App.css';
import styles from './App.module.css';
import AboutMe from './components/About Me/About Me';

function App() {
	return (
		<>
			<NavBar />
			<main className={styles.main}>
				<Title />
				<AboutMe />
			</main>
		</>
	);
}

export default App;
