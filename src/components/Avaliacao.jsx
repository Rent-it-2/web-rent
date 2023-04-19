import React, { useEffect, useState } from "react";
import { Rating, Box } from "@mui/material";
import { Star } from "@mui/icons-material";

const Avaliacao = ({ valorSetado }) => {
  const [value, setValue] = useState(0);
  const [hover, setHover] = useState(-1);

  // const label = {
  //   0.5: "muito ruim",
  //   1: "muito ruim",
  //   1.5: "muito ruim",
  //   2: "muito ruim",
  //   2.5: "muito ruim",
  //   3: "muito ruim",
  //   3.5: "muito ruim",
  //   4: "muito ruim",
  //   4.5: "muito ruim",
  //   5: "muito ruim",
  // }

  useEffect(() => {
    console.log("rating", valorSetado);
    // setValue(valorSetado);
    if (valorSetado != null) {
      setValue(valorSetado);
      setHover(valorSetado);
    }
  }, []);

  return (
    <div>
      {/* <Box> */}
        <Rating
          name="hover-feedback"
          value={value}
          precision={0.5}
          // {...valorSetado == null && (

          // onChange={(e, newValue) => {
          //     setValue(newValue)
          // }}
          // onChangeActive={(e, newHover) => {
          //   setHover(newHover)
          // }}

          // }}
          // emptyIcon={<Star style={{ opacity: 0.5 }} />)
        />
      {/* </Box> */}
      {/* {value !== null && (
        <div>
          {label[hover !== -1 ? hover: value]}
        </div>
      )} */}
    </div>
  );
};

export default Avaliacao;
