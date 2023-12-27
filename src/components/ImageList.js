/*eslint-disable*/

import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "./SingleImage";
import { fetchImages ,clearImages} from "../actions/action";
import Image1 from "./Images/elijah-pilchard-6TMuMjWmPiE-unsplash.jpg";
import Image2 from "./Images/chalo-gallardo-yLB6MkiL2Io-unsplash.jpg";
import Image3 from "./Images/karsten-winegeart-RU6wtyteGgc-unsplash.jpg";
import Image4 from "./Images/melody-zimmerman-Aa_zcHjzJUs-unsplash.jpg";
import Image5 from "./Images/premium_photo1.png";
import Image6 from "./Images/alexander-mass-liRqyrJKUEI-unsplash.jpg";
import Skeleton from "react-loading-skeleton";

import { FaEye } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

const ImageList = () => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const images = useSelector((state) => state.images);

  const query = useSelector((state) => state.query);
  const bottomOfPage = useRef(null);
  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;

    const threshold = 100;

    if (windowHeight + scrollTop >= documentHeight - threshold) {
      if (!bottomOfPage.current) {
        bottomOfPage.current = true;
        dispatch(fetchImages(query));
      }
    } else {
      bottomOfPage.current = false;
    }
  };
  const fetchData = () => {
    setTimeout(() => {
      setLoading(false);
    }, 50);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchImages(e.target.value));
    dispatch(clearImages());

  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    fetchData();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch, query]);

  return (
    <>
      <div className="allButtons">
        <button
          type="button"
          className="btn btn-outline-success"
          value="animal"
          onClick={handleSearch}
        >
          Animals
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          value="street-photography"
          onClick={handleSearch}
        >
          Street Photography
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          value="food-drink"
          onClick={handleSearch}
        >
          Food Drink
        </button>
        <button
          type="button"
          className="btn btn-outline-danger"
          value="travel"
          onClick={handleSearch}
        >
          Travel
        </button>
        <button
          type="button"
          className="btn btn-outline-warning"
          value="fashion-beauty"
          onClick={handleSearch}
        >
          Fashion Beauty
        </button>
        <button
          type="button"
          className="btn btn-outline-info"
          value="people"
          onClick={handleSearch}
        >
          People
        </button>
      </div>
      <div className="image-list">
        {images && images.length === 0 ? 
        (
          loading ? (
            <div className="skeleton-container">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="skeleton-item">
                  <Skeleton height={400} width={400} />
                </div>
              ))}
            </div>
          ) : (
            <section className="product-section pb-80">
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-12">
                    <div className="featureproduct-slider row justify-content-between">
                      <div className="col-lg-4 col-sm-6 mb-sm-3">
                        <div className="product-single text-center">
                          <div className="thumb">
                            <img
                              src={Image1}
                              style={{ height: "450px", width: "600px" }}
                            />
                            <span className="new">Unsplash+</span>
                            <ul className="product-icons">
                              <li>
                                <a href="#">
                                  <FaEye />
                                </a>
                              </li>
                              <li>
                                <FaHeart />
                              </li>
                              <li>+</li>
                            </ul>
                            <div className="rating">
                              <span className="fas fa-star checked"></span>
                              <span className="fas fa-star checked"></span>
                              <span className="fas fa-star checked"></span>
                              <span className="fas fa-star"></span>
                              <span className="far fa-star"></span>
                            </div>
                          </div>
                          <div className="content text-left">
                            <h6 className="name"> </h6>
                            <div className="price">
                              <span className="regular-price"> </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6 mb-sm-3">
                        <div className="product-single text-center">
                          <div className="thumb">
                            <img
                              src={Image2}
                              style={{ height: "450px", width: "600px" }}
                            />
                            <span className="new">Unsplash+</span>
                            <ul className="product-icons">
                              <li>
                                <a href="#">
                                  <FaEye />
                                </a>
                              </li>
                              <li>
                                <FaHeart />
                              </li>
                              <li>+</li>
                            </ul>
                            <div className="rating">
                              <span className="fas fa-star checked"></span>
                              <span className="fas fa-star checked"></span>
                              <span className="fas fa-star checked"></span>
                              <span className="fas fa-star"></span>
                              <span className="far fa-star"></span>
                            </div>
                          </div>
                          <div className="content text-left">
                            <h6 className="name"> </h6>
                            <div className="price">
                              <span className="regular-price"> </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6 mb-sm-3">
                        <div className="product-single text-center">
                          <div className="thumb">
                            <img
                              src={Image3}
                              style={{ height: "450px", width: "600px" }}
                            />
                            <span className="new">Unsplash+</span>
                            <ul className="product-icons">
                              <li>
                                <a href="#">
                                  <FaEye />
                                </a>
                              </li>
                              <li>
                                <FaHeart />
                              </li>
                              <li>+</li>
                            </ul>
                            <div className="rating">
                              <span className="fas fa-star checked"></span>
                              <span className="fas fa-star checked"></span>
                              <span className="fas fa-star checked"></span>
                              <span className="fas fa-star"></span>
                              <span className="far fa-star"></span>
                            </div>
                          </div>
                          <div className="content text-left">
                            <h6 className="name"> </h6>
                            <div className="price">
                              <span className="regular-price"> </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6 mb-sm-3">
                        <div className="product-single text-center">
                          <div className="thumb">
                            <img
                              src={Image4}
                              style={{ height: "450px", width: "600px" }}
                            />
                            <span className="new">Unsplash+</span>
                            <ul className="product-icons">
                              <li>
                                <a href="#">
                                  <FaEye />
                                </a>
                              </li>
                              <li>
                                <FaHeart />
                              </li>
                              <li>+</li>
                            </ul>
                            <div className="rating">
                              <span className="fas fa-star checked"></span>
                              <span className="fas fa-star checked"></span>
                              <span className="fas fa-star checked"></span>
                              <span className="fas fa-star"></span>
                              <span className="far fa-star"></span>
                            </div>
                          </div>
                          <div className="content text-left">
                            <h6 className="name"> </h6>
                            <div className="price">
                              <span className="regular-price"> </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-sm-6 mb-sm-3">
                        <div className="product-single text-center">
                          <div className="thumb">
                            <img
                              src={Image5}
                              style={{ height: "450px", width: "600px" }}
                            />
                            <span className="new">Unsplash+</span>
                            <ul className="product-icons">
                              <li>
                                <a href="#">
                                  <FaEye />
                                </a>
                              </li>
                              <li>
                                <FaHeart />
                              </li>
                              <li>+</li>
                            </ul>
                            <div className="rating">
                              <span className="fas fa-star checked"></span>
                              <span className="fas fa-star checked"></span>
                              <span className="fas fa-star checked"></span>
                              <span className="fas fa-star"></span>
                              <span className="far fa-star"></span>
                            </div>
                          </div>
                          <div className="content text-left">
                            <h6 className="name"> </h6>
                            <div className="price">
                              <span className="regular-price"> </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6 mb-sm-3">
                        <div className="product-single text-center">
                          <div className="thumb">
                            <img
                              src={Image6}
                              style={{ height: "450px", width: "600px" }}
                            />
                            <span className="new">Unsplash+</span>
                            <ul className="product-icons">
                              <li>
                                <a href="#">
                                  <FaEye />
                                </a>
                              </li>
                              <li>
                                <FaHeart />
                              </li>
                              <li>+</li>
                            </ul>
                            <div className="rating">
                              <span className="fas fa-star checked"></span>
                              <span className="fas fa-star checked"></span>
                              <span className="fas fa-star checked"></span>
                              <span className="fas fa-star"></span>
                              <span className="far fa-star"></span>
                            </div>
                          </div>
                          <div className="content text-left">
                            <h6 className="name"> </h6>
                            <div className="price">
                              <span className="regular-price"> </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="featureproduct-arrow custom-slick-nav"></div>
                  </div>
                </div>
              </div>
            </section>
          )
        ) : (
          images.map((image) => <Image key={image.id} image={image} />)
        )}
      </div>
    </>
  );
};

export default ImageList;
