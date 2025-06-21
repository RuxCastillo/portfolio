import Title from '../Title/Title';
//import './App.css';
import AboutMe from '../About Me/About Me';
import CreativeWorks from '../CreativeWorks/CreativeWorks';
import LatestArticle from '../LatestArticle/LatestArticle';
import KeepInTouch from '../KeepInTouch/KeepInTouch';

function Home() {
	return (
		<>
			<Title />
			<AboutMe />
			<CreativeWorks />
			<LatestArticle />
			<KeepInTouch />
		</>
	);
}

export default Home;
