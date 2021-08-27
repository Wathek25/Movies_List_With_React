import React, { useState } from "react";
import "./Movielist.css";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import propTypes from "prop-types";

const Moviecards = ({ movie }) => {
  return (
    <div>
      <div className="wrapper">
        <div className="main_card">
          <div className="card_left">
            <div className="card_datails">
              <h1>{movie.name}</h1>
              <div className="card_cat">
                <p className="PG">PG - 13</p>
                <p className="year">{movie.date}</p>
                <p className="genre">{movie.type} </p>
                <p className="time">2h 28m</p>
              </div>
              <p className="disc">{movie.description}</p>
              <a href="https://www.imdb.com/title/tt4912910/" target="_blank">
                Read More
              </a>
              <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Read only</Typography>
                <Rating name="read-only" value={movie.rating} readOnly />
              </Box>
              <div className="social-btn">
                {/* WATCH TRAILER*/}
                <button>
                  <i className="fas fa-play" /> SEE TRAILER
                </button>
                {/* GET*/}
                <button>
                  <i className="fas fa-download" /> DOWNLOAD
                </button>
                {/*USERS RATINGS*/}
                <button>
                  <i className="fas fa-thumbs-up" /> 97%
                </button>
                {/*BOOKMARK*/}
                <button>
                  <i className="fas fa-star" />
                </button>
              </div>
            </div>
          </div>
          <div className="card_right">
            <div className="img_container">
              <img src={movie.image} alt="the_image" height="550px" />
            </div>
            {/* <div className="play_btn">
              <a href="https://www.imdb.com/title/tt4912910/" target="_blank">
                <i className="fas fa-play-circle" />
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Moviecards;
// default Props
Moviecards.defaultProps = {
  id: 0,
  image: "blank",
  name: "unknown",
  date: "unknown",
  type: "unknown",
  description: "unknown",
};
// proptypes
Moviecards.propTypes = {
  id: propTypes.number,
  name: propTypes.string,
  date: propTypes.string,
  type: propTypes.string,
  description: propTypes.string,
};
