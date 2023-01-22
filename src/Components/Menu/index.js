import React from "react";
import { Grid, Typography } from "@mui/material";
import { menu } from "./content";
import {useNavigate} from "react-router-dom"

const Menu = () => {
  const navigate = useNavigate()  
  return (
    <Grid container spacing={2} rowSpacing={2} className="centered">
      {menu?.map((data) => (
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6} className="grid_items">
          <div className="image_generation">
            <div className="main_div" onClick={(e)=>{
                e.preventDefault()
                navigate(data.url)
            }}>
              <Typography className="text">{data.name}</Typography>
              <Typography className="body">{data.desc}</Typography>
            </div>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default Menu;
