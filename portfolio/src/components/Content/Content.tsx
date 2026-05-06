import { useParams } from 'react-router-dom';
import styles from './Content.module.css';
import myFirstJob from '../../../escritos/Blog/my-first-job';
import Foto from '../../assets/foto retocada-removebg-preview.jpg';

interface BlogPost {
	hero: string;
	title: string;
	date: string;
	readTime: string;
	about: string;
	blocks: {
		type: string;
		body: string;
	}[];
}

const posts = {
	'my-first-job': myFirstJob,
};

export default function Content() {
	const { id } = useParams<{ id: keyof typeof posts }>();

	if (!id) {
		return null;
	}

	const post: BlogPost = posts[id];

	return (
		<section>
			<div className={styles.header}>
				<h1 className={styles.title}>{post.title}</h1>
				<div className={styles.meta}>
					<div className={styles.profile}>
						<img
							src={Foto}
							alt="My profile picture"
							className={styles.profile__picture}
						/>
						<p className={styles.name}>Rubén López C. / {post.date}</p>
					</div>
					<p className={styles.readTime}>{post.readTime} read</p>
				</div>
			</div>
			<div>
				{post.blocks.map((block, i) => {
					if (block.type === 'heading') {
						return (
							<h2 key={i} className={styles.heading}>
								{block.body}
							</h2>
						);
					}

					if (block.type === 'text') {
						return (
							<p key={i} className={styles.paragraph}>
								{block.body}
							</p>
						);
					}
				})}
			</div>
		</section>
	);
}
