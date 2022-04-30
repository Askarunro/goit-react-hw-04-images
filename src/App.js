import "./App.css";
// import { nanoid } from "nanoid";
import React, { Component } from "react";
import { useState, useEffect, useReducer, useRef } from "react";
import api from "./services";
import SearchBar from "./components/Searchbar";
import Loader from "./components/Loader";
import Modal from "./components/Modal";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import axios from "axios";

axios.defaults.baseURL =
  " https://pixabay.com/api/?key=24828507-89537ba0cc73f2aa36f96abcf&image_type=photo&orientation=horizontal";

const itemList = 12;

function App() {
  const [searchName, setSearchName] = useState("");
  // const [searchName,dispatch]=useReducer(nameReducer, "");
  const [hits, setHits] = useState(null);
  const [status, setStatus] = useState("idle");
  const [showModal, setShowModal] = useState(false);
  const [imgLarge, setImgLarge] = useState("");
  const [page, setPage] = useState(1);
  const [more, setMore] = useState(false);
  const [loading, setLoading] = useState(false);

  //  const onSubmit = (data) => {
  //   dispatch(data)
  //   };

  const prevNameSearch = useRef();
  const prevPage = useRef();

  const onSubmit = (data) => {
    prevNameSearch.current = searchName;

    if (data !== searchName) {
      setSearchName(data);
      setHits([]);
      setPage(1);
      setStatus("idle");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (
        prevNameSearch.current !== searchName &&
        searchName !== "" &&
        page === 1
      ) {
        try {
          setStatus("pending");
          setPage(1);
          const search = searchName;
          const pageNumber = page;
          setLoading(true);
          const response = await api(search, pageNumber);
          setLoading(false);
          setHits(response.data.hits);
          setStatus("resolved");
          response.data.total ? setStatus("resolved") : setStatus("error");
          response.data.total > itemList ? setMore(true) : setMore(false);
          return response;
        } catch {
          setStatus("error");
        }
      }
      if (prevNameSearch.current !== searchName && page > 1) {
        try {
          setStatus("pending");
          const search = searchName;
          const pageNumber = page;
          const response = await api(search, pageNumber);
          setHits([...hits, ...response.data.hits]);
          setStatus("resolved");
          response.data.total !== hits.length ? setMore(true) : setMore(false);
          return response;
        } catch {
          if (hits <= 1) {
            setStatus("error");
          }
        }
      }
    };
    fetchData();
  }, [searchName, page]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleImgClick = (data) => {
    setImgLarge(data);
  };

  const handleMoreClick = () => {
    prevPage.current = page;
    setPage(page + 1);
  };

  return (
    <>
      <SearchBar submit={onSubmit} />
      {status === "pending" && <Loader />}
      {status === "error" && (
        <h2>
          Sorry, but there is no such result. Please specify another request.
        </h2>
      )}
      {status === "resolved" && (
        <>
          <ImageGallery
            hits={hits}
            openModal={handleImgClick}
            onClick={toggleModal}
          />
          {more && <Button onClick={handleMoreClick} />}
        </>
      )}
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={imgLarge} className="img" />
        </Modal>
      )}
    </>
  );
}

export default App;
