import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);


  const updateNews = async () => {
    document.getElementById("loader").className =
      "bg-danger w-25  p-3 border border-1 border-danger";
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${props.apiKey}&page=${page}&category=${props.category}&pageSize=${props.numberOfItems}`;
    document.getElementById("loader").className =
      "bg-danger w-50  p-3 border border-1 border-danger";

    let data = await fetch(url);
    let parseddata = await data.json();
    document.getElementById("loader").className =
      "bg-danger w-75  p-3 border border-1 border-danger";
    setArticles(parseddata.articles);
    setTotalResults(parseddata.totalResults);
    setLoading(false);

    document.getElementById("loader").className =
      "bg-danger w-100  p-3 border border-1 border-danger";
    setTimeout(function () {
      document.getElementById("loader").className = "";
    }, 500);
  };
  useEffect(() => {
    updateNews();
  document.title = "Newzer - " + props.category[0].toUpperCase() + props.category.substring(1);

  }, []);

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${
      props.apiKey
    }&page=${page + 1}&category=${props.category}&pageSize=${
      props.numberOfItems
    }`;
    setPage(page + 1);
    let data = await fetch(url);
    let parseddata = await data.json();
    setArticles(articles.concat(parseddata.articles));
    setTotalResults(parseddata.totalResults);
  };
  return (
    <>
      <div>
        <div className="container">
          <h1
            className="text-center mx-4 px-4"
            style={{ marginTop: "6rem", marginBottom: "3rem" }}
          >
            {"Newzer - " +
              props.category[0].toUpperCase() +
              props.category.substring(1)}
          </h1>
          {loading && <Spinner />}
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner />}
          >
            {articles.map((element) => {
              let a;
              let publishedAt;
              a = element.publishedAt;
              a = new Date(a);
              publishedAt = a.toGMTString();
              return (
                <NewsItem
                  key={element.url}
                  title={element.title}
                  description={element.description}
                  imageurl={element.urlToImage}
                  url={element.url}
                  publishedat={publishedAt}
                  author={element.author}
                />
              );
            })}
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
};

News.defaultProps = {
  numberOfItems: 8,
  category: "general",
};
News.propTypes = {
  numberOfItems: PropTypes.number,
  catergory: PropTypes.string,
};
export default News;
