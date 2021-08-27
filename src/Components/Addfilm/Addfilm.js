import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import SimpleModal from "@material-ui/core/Modal";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Addfilm({ moviesData, setMoviesData, addfilms }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [date, setDate] = React.useState("");
  const [type, setType] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [image, setImage] = React.useState();
  const [rating, setRating] = React.useState("");
  // const [newMovie, setnewMovie] = React.useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const stopReloading = (event) => {
    event.preventDefault();
    event.target.reset();
    if (name && date && type && description && image && rating) {
      setValid(true);
    }
    setSubmitted(true);
  };

  const body = (
    <form style={modalStyle} className={classes.paper} onSubmit={stopReloading}>
      <h2 id="simple-modal-title">Add your film</h2>
      {submitted && valid ? (
        <div>
          <span style={{ backgroundColor: "red" }}>Success!</span>
        </div>
      ) : null}
      <label>Name :</label>
      <br />
      <input onChange={(event) => setName(event.target.value)} />
      <br />
      <label>Date :</label>
      <br />
      <input onChange={(event) => setDate(event.target.value)} />
      <br />
      <label>Type :</label>
      <br />
      <input onChange={(event) => setType(event.target.value)} />
      <br />
      <label>Description :</label>
      <br />
      <input onChange={(event) => setDescription(event.target.value)} />
      <br />
      <label>Image link :</label>
      <br />
      <input onChange={(event) => setImage(event.target.value)} />
      <br />
      <br />
      <label>Rating :</label>
      <br />
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={rating}
        onChange={(event) => setRating(event.target.value)}
      >
        <MenuItem value={1}>1 Star</MenuItem>
        <MenuItem value={2}>2 Stars</MenuItem>
        <MenuItem value={3}>3 Stars</MenuItem>
        <MenuItem value={4}>4 Stars</MenuItem>
        <MenuItem value={5}>5 Stars</MenuItem>
      </Select>
      <br />
      <button
        style={{ backgroundColor: "green" }}
        onClick={() =>
          addfilms({ name, date, type, description, image, rating })
        }
      >
        Add
      </button>
      <button
        style={{ backgroundColor: "red" }}
        type="button"
        onClick={handleClose}
      >
        Close
      </button>
      <SimpleModal />
    </form>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Add new movie ?
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
