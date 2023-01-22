import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { openai } from "../../Services/constants";
import loading from "../../Services/Loading.jpg";

const Imagegenerator = () => {
  const [prompt, setprompt] = useState("");
  const [res, setres] = useState([]);
  const [loader, setloader] = useState(false);

  const handleImage = async () => {
    setloader(true);
    setres([]);
    const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });
    setres(response.data.data[0].url);
    setloader(false);
    setprompt("");
  };

  return (
    <div className="main_container">
      <div className="main_heading">
        <Typography className="text_header">
          Generate An Image Using Open AI Api
        </Typography>
        <input
          className="app_input"
          placeholder="Type something to generate an Image"
          value={prompt}
          onChange={(e) => setprompt(e.target.value)}
        />
      </div>
      <Button variant="outlined" className="app_button" onClick={handleImage}>
        Generate An Image
      </Button>
      <div>
        {res.length > 0 && <img src={res} alt="res-alt" className="resimg" />}
        {loader && <img src={loading} alt="res-alt" className="resimg" />}
      </div>
    </div>
  );
};

export default Imagegenerator;
