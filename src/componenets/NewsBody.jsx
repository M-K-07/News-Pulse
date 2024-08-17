import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
const NewsBody = ({ category, pagesize, setprogress }) => {
  const [NewsData, setNewsData] = useState({
    articles: [],
    pages: 1,
  });

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  document.title = `News Pulse | ${capitalize(category)}`;

  const fetchdata = async (page) => {
    try {
      setprogress(10);
      let api = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}&pageSize=${pagesize}&page=${page}`);
      setprogress(40);
      let data = await api.json();
      setNewsData({
        articles: data.articles,
        pages: page,
        totalResults: data.totalResults,
      });
      console.log(data)
      setprogress(100);
    } catch (err) {
      console.log("error occured");
    }
  };

  useEffect(() => {
    fetchdata(1);
  }, [category]);

  const PrevBtn = async () => {
    const PrevPage = NewsData.pages - 1;
    if (PrevPage >= 1) {
      fetchdata(PrevPage);
      window.scrollTo({ top: 0 });
    }
  };

  const NextBtn = async () => {
    if (!(NewsData.pages + 1 > Math.ceil(NewsData.totalResults / {pagesize}))) {
      fetchdata(NewsData.pages + 1);
      window.scrollTo({ top: 0 });
    }
  };
  return (
    <>
      <h2
        className="text-center "
        style={{ fontSize: "43px", fontWeight: "bold", marginTop: "90px"}}
      >
        <span style={{ color: "red" }}>{capitalize(category)}</span> Headlines
      </h2>
      <div className="m-5 d-flex flex-wrap justify-content-center">
        {NewsData.articles.map((news, index) => {
          return (
            <div
              key={index}
              className="card text-white mb-5 mx-5 d-inline-block"
              style={{
                overflow: "hidden",
                maxWidth: "345px",
                borderRadius: "20px",
              }}
            >
              <NewsItem
                title={news.title}
                description={news.description}
                img={news.urlToImage}
                url={news.url}
                author={news.author}
                published_date={news.publishedAt}
              />
            </div>
          );
        })}
      </div>
      <div className="container">
        <div className="d-flex justify-content-around my-5">
          <button disabled={NewsData.pages <= 1} type="button" className="btn btn-dark" onClick={PrevBtn} >
            &larr; Previous
          </button>
          <button disabled={NewsData.pages + 1 >= Math.ceil(NewsData.totalResults / 12)} type="button" className="btn btn-dark" onClick={NextBtn}>
            Next &rarr;
          </button>
        </div>
      </div>
    </>
  );
};

export default NewsBody;
