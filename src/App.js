/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import Photo from "./Photo";
import SearchIcon from "./SearchIcon";

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");

  const fetchImages = async () => {
    setLoading(true);
    let url;
    const urlPage = `&page=${page}`;
    const urlQuery = `&query=${query}`;

    if (query) {
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
    } else {
      url = `${mainUrl}${clientID}${urlPage}`;
    }

    try {
      const { data } = await axios(url);

      setPhotos((oldPhotos) => {
        if (query && page === 1) {
          return data.results;
        } else if (query) {
          return [...oldPhotos, ...data.results];
        } else {
          return [...oldPhotos, ...data];
        }
      });

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    const scrollEvent = window.addEventListener("scroll", () => {
      if (
        !loading &&
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 1
      ) {
        setPage((oldPage) => oldPage + 1);
      }
    });

    return () => window.removeEventListener("scroll", scrollEvent);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line
  }, [page]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
  };

  return (
    <main>
      <section className="search-wrapper">
        <form action="" className="search-form">
          <input
            type="text"
            placeholder="Search"
            className="form-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="btn-submit" onClick={handleSubmit}>
            <SearchIcon />
          </button>
        </form>
      </section>

      <section className="photos-wrapper">
        <div className="photos-center">
          {photos.map((image, index) => {
            return <Photo {...image} key={index} />;
          })}
        </div>
        {loading && <h2 className="loading">Loading...</h2>}
      </section>
    </main>
  );
}

export default App;
