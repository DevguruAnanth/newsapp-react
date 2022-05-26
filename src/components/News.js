import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    numberOfItems: 8,
    category: "general",
  };
  static propTypes = {
    numberOfItems: PropTypes.number,
    catergory: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title =
      "Newzer - " +
      this.props.category[0].toUpperCase() +
      this.props.category.substring(1);
  }

  async componentDidMount() {
    document.getElementById("loader").className =
      "bg-danger w-25  p-3 border border-1 border-danger";
    this.setState({
      loading: true,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.props.apiKey}&page=${this.state.page}&category=${this.props.category}&pageSize=${this.props.numberOfItems}`;
    document.getElementById("loader").className =
      "bg-danger w-50  p-3 border border-1 border-danger";

    let data = await fetch(url);
    let parseddata = await data.json();
    document.getElementById("loader").className =
      "bg-danger w-75  p-3 border border-1 border-danger";

    this.setState({
      articles: parseddata.articles,
      totoalResults: parseddata.totalResults,
      loading: false,
    });
    document.getElementById("loader").className =
      "bg-danger w-100  p-3 border border-1 border-danger";
    setTimeout(function () {
      document.getElementById("loader").className = "";
    }, 1000);
  }
  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.props.apiKey}&page=${this.state.page}&category=${this.props.category}&pageSize=${this.props.numberOfItems}`;
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseddata.articles),
      totoalResults: parseddata.totalResults,
    });
  };
  render() {
    return (
      <>
        <div>
          <div className="container">
            <h1
              className="text-center mx-4 px-4"
              style={{ marginTop: "6rem", marginBottom: "3rem" }}
            >
              {"Newzer - " +
                this.props.category[0].toUpperCase() +
                this.props.category.substring(1)}
            </h1>
            {this.state.loading && <Spinner />}
            <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={this.state.articles.length !== this.state.totalResults}
              loader={<Spinner />}
            >
              {this.state.articles.map((element) => {
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
  }
}

export default News;
