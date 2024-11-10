const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card" style={{ width: "18rem", margin: "1rem" }}>
      <img src={src} className="card-img-top" alt={title || "News image"} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
