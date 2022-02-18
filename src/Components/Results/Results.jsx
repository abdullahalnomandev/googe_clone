import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { Link, useLocation } from "react-router-dom";
import { useResultContext } from "../../context/ResultsContext";
import './Results.css';
const Results = () => {
  const { results, requestResult, search, loading,dark } = useResultContext();
  const location = useLocation();
  console.log(location.pathname, results.results);
  const path = location.pathname;

  useEffect(() => {
    if (results) {
      if (location.pathname !== "videos") {
        requestResult(`${location.pathname}/q=${search}`);
      }

      if (location.pathname === "/videos") {
        return requestResult(`/search/q=${search} videos`);
      }
    }
  }, [path]);

  return (
    <div  className={dark? 'container-fluid dark': 'container-fluid'}>
      {loading && (
        <img
          className="img-fluid text-center mb-5"
          src="https://flevix.com/wp-content/uploads/2019/07/Color-Loading-1.gif"
          alt=""
        />
      )}
      {path === "/news" ? (
        <div>
          {results?.entries?.map(({ title, source, title_detail }) => (
            <div className="container mb-5 mt-2">
              <a
                className="text-secondary"
                href={source.href}
                target="_blank"
                rel="noreferrer"
              >
                {source.href}
              </a>
              <h5 className="text-primary">{title}</h5>
              <p>{title_detail.value}</p>
            </div>
          ))}
        </div>
      ) : path === "/search" ? (
        <div>
          {results?.results?.map(({ title, link }) => (
            <div className="container mb-5 mt-2">
              <a
                className="text-secondary"
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                {link}
              </a>
              <h5 className="text-primary">{title}</h5>
              <p>{title}</p>
            </div>
          ))}
        </div>
      ) : path === "/images" ? (
        <div className="row">
          {results?.image_results?.map(({ image, link: { href, title } }) => (
            <div className="col-md-2 mt-3">
              <Link to={href}>
                <img className="mx-2 " src={image.src} alt="" />
                <p>{title}</p>
              </Link>
            </div>
          ))}
        </div>
      ) : path === "/videos" ? (
        <div className="row">
          {results?.results?.map((video) => (
            <div className="col-md-3 mt-2">
              <ReactPlayer
                url={video.link}
                controls
                width="335px"
                height="200px"
              />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Results;
