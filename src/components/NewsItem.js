import React from "react";

const NewsItem = (props) => {
  let { title, description, imageurl, url, author } = props;
  return (
    <>
      <div className="card mb-3 my-4 mt-4" style={{ maxWidth: "680px", marginLeft: "5rem" }}>
        <a href={url} className="text-black">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={!imageurl ? "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png" : imageurl} className="img-fluid rounded-start" alt="..." style={{ maxWidth: "230px" }} />
            </div>
            <div className="col-md-8 ">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">
                  <small className="text-muted">{author}</small>
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default NewsItem;
