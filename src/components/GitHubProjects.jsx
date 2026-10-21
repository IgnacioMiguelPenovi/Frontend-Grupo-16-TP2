import { useEffect, useState } from 'react';
import '../styles/github.css';

export default function GitHubProjects({ username }) {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`)
      .then((res) => {
        if (!res.ok) throw new Error('No se pudieron cargar los proyectos');
        return res.json();
      })
      .then((data) => setRepos(data
        .filter((repo) => !repo.fork)
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 8)))
        .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
    }, [username]);

  //if (error) return <p>{error}</p>;

  return (
    <section className='github-projects'>
      <h2 className='github-projects__title'>
        <img src="/img/github.png" alt="ícono de github" /> Proyectos en GitHub
        </h2>

      {loading && <p>Cargando proyectos de GitHub...</p>}

      {error && <p className="github-projects__error">{error}</p>}

      <div className="github-projects__grid">
      {repos.map((repo) => (
        <article className="github-projects__card" key={repo.id}>
          <h3>
            <a href={repo.html_url} target='_blank' rel='noreferrer'>{repo.name}</a>
            </h3>
            <p>{repo.description || 'Sin descripción'}</p>
            <small>
              {repo.language || 'Lenguaje no especificado'} · ⭐ 
            </small>
        </article>
      ))}
      </div>
    </section>
  );
}