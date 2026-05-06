//import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Start from './pages/Start/Start';
import Projects from './components/Projects/Projects';
import Blog from './components/Blog/Blog';
import Content from './components/Content/Content';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Start />}>
				<Route index element={<Home />} />
				<Route path="/projects" element={<Projects />} />

				<Route path="/blog" element={<Blog />} />
				<Route path="/blog/:id" element={<Content />} />
			</Route>
		</Routes>
	);
}

export default App;
