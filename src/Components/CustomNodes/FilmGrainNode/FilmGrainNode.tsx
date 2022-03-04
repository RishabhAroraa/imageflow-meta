import { Handle, Position } from "react-flow-renderer";
import styles from "./FilmGrainNode.module.scss";
import { useState } from "react";

import Slider from "@mui/material/Slider";
// import colors from "@utils/colors";

const sliderStyles = {
  color: "#ffffff",
  "& .MuiSlider-thumb": {
    height: 18,
    width: 18,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    boxShadow: "red",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: `0 0 0 8px ${"#000000"}22`,
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    color: `${"black"}`,
    background: "unset",
    padding: 0,
    width: 28,
    height: 28,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#ffffff",
    transformOrigin: "bottom left",
    transform: "translate(50%, calc(-100% + 5px)) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, calc(-100% + 5px)) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
};

const FilmGrainNode = ({ data }: { data: any }) => {
  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const [value, setValue] = useState(data.percent);

  return (
    <div className={styles.container}>
      <Handle
        type="target"
        position={Position.Left}
        className={styles.handle}
      />
      <div className={styles.label}>Film Grain</div>
      <Slider
        value={value}
        aria-label="Default"
        valueLabelDisplay="auto"
        className="nodrag"
        sx={sliderStyles}
        onChange={handleChange}
      />
      <Handle
        type="source"
        position={Position.Right}
        className={styles.handle}
      />
    </div>
  );
};

export default FilmGrainNode;
