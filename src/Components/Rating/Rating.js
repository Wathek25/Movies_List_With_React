import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const RatingC = ({ getMovieByRate }) => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <Box
        component="fieldset"
        mb={3}
        borderColor="transparent"
        width="10%"
        margin="auto"
      >
        <Typography component="legend">Search with rating</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            getMovieByRate(newValue);
          }}
        />
      </Box>
    </div>
  );
};

export default RatingC;
