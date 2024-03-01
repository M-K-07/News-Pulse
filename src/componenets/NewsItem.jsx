const NewsItem = (props) => {
  return (
    <div>
      <img
        src={ props.img? props.img: "https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg"}
        className="card-img-top "
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title" style={{ color: "#95caf9" }}>
          {props.title}
        </h5>
        <p className="card-text">
          {props.description
            ? props.description
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nam voluptatum debitis "}
        </p>
        <p className="card-text"><small className="text-muted">Author: {props.author?props.author:"Unknown"}. <br/> Published At: {props.published_date}</small></p>
        <a href={props.url} target="_blank" className="btn btn-primary">
          View More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
