import { useParams } from 'react-router-dom';
import styles from './Content.module.css';
import myFirstJob from '../../../escritos/Blog/my-first-job';
import Foto from '../../assets/foto retocada-removebg-preview.jpg';

interface Contenido {
	hero: string;
	title: string;
	fecha: string;
	tiempoDeLeer: string;
	about: string;
	bloques: {
		type: string;
		body: string;
	}[];
}

const paths = {
	'my-first-job': myFirstJob,
};

export default function Content() {
	const { id } = useParams<{ id: keyof typeof paths }>();

	if (!id) {
		return null;
	}

	const text: Contenido = paths[id];

	return (
		<section>
			<div className={styles.header}>
				<h1 className={styles.title}>{text.title}</h1>
				<div className={styles.meta}>
					<div className={styles.profile}>
						<img
							src={Foto}
							alt="My profile picture"
							className={styles.profile__picture}
						/>
						<p className={styles.name}>Rubén López C. / {text.fecha}</p>
					</div>
					<p className={styles.readTime}>{text.tiempoDeLeer} read</p>
				</div>
			</div>
			<div>
				{text.bloques.map((bloque) => {
					if (bloque.type === 'titulo') {
						return <h2 className={styles.titulo}>{bloque.body}</h2>;
					}

					if (bloque.type === 'texto') {
						return <p className={styles.texto}>{bloque.body}</p>;
					}
				})}
			</div>
		</section>
	);
}
