import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { openai } from "../../Services/constants";

const QuesAnsgenerator = () => {
  const [prompt, setprompt] = useState("");
  const [res, setres] = useState([]);
  const [loader, setloader] = useState(false);

  const handleAnswer = async () => {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Q: ${prompt}\nA:`,
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["\n"],
    });
    setres(response.data.choices[0].text);
  };

  return (
    <div className="main_container">
      <div className="main_heading">
        <Typography className="text_header">
          Answer questions based on existing knowledge.
        </Typography>
        <input
          className="app_input"
          placeholder="Ask me a question, I will give you the answer..."
          value={prompt}
          onChange={(e) => setprompt(e.target.value)}
        />
      </div>
      <Button variant="outlined" className="app_button" onClick={handleAnswer}>
        Generate Answer
      </Button>
      <div className="text_ans">
        <Typography className="text">{res}</Typography>
      </div>
    </div>
  );
};

export default QuesAnsgenerator;
