import { Link, useParams } from "react-router-dom";
import { stories } from "./data/stories.js";

const StoryDetailPage = () => {
  const { slug } = useParams();
  const story = stories.find((s) => s.slug === slug);
  if (!story) {
  return (
    <section className="container my-5 text-light">
      <Link to="/Storie-dei-Mercati" className="btn btn-warning mb-4">
        ← Torna alle storie
      </Link>
      <h3 className="fw-bold">Storia non trovata</h3>
    </section>
  );
}

  return (
    <section className="container my-5 text-light">
      <Link to="/Storie-dei-Mercati" className="btn btn-warning mb-4">
        ← Torna alle storie
      </Link>

      <h3 className="display-6 fw-bold mb-4">{story.title}</h3>

      {story.img ? (
        <img
          src={story.img}
          alt={story.title}
          className="img-fluid rounded-4 shadow-sm mb-4"
        />
      ) : null}

      {story.content.map((p, i) => (
        <p key={i} className="fs-5 text-light opacity-75">
          {p}
        </p>
      ))}
    </section>
  );
};

export default StoryDetailPage;