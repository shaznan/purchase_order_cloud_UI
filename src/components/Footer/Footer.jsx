import React from "react";
import { Grid } from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import DescriptionIcon from "@mui/icons-material/Description";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import InsightsIcon from "@mui/icons-material/Insights";
import { useStyles } from "./footer_styles";

function Footer() {
  const classes = useStyles();
  //props should be dynamic, fetch exchange rate from API
  const props = {
    status: "EDIT",
    agent: "ADMIN",
    documentType: "Purchase Order",
    currency: "USD",
    totalGlassWeight: 778.5,
    exchangeRate: 1.38,
  };

  return (
    <div className={classes.container}>
      <div item className={classes.item}>
        <InsightsIcon className={classes.icon} style={{ color: "#2596be" }} />{" "}
        <p className={classes.label}>
          status <span>{props.status}</span>
        </p>
      </div>
      <div item className={classes.item}>
        <SupportAgentIcon
          className={classes.icon}
          style={{ color: "#68ac9f" }}
        />
        <p className={classes.label}>
          Agent<span>props.agent</span>
        </p>
      </div>
      <div item className={classes.item}>
        <DescriptionIcon
          className={classes.icon}
          style={{ color: "#B0AC92" }}
        />
        <p className={classes.label}>
          Document Type<span>{props.documentType}</span>
        </p>
      </div>
      <div item className={classes.item}>
        <AttachMoneyIcon
          className={classes.icon}
          style={{ color: "#5AD97D" }}
        />
        <p className={classes.label}>
          Currency<span>{props.currency}</span>
        </p>
      </div>
      <div item className={classes.item}>
        <ViewCarouselIcon
          className={classes.icon}
          style={{ color: "#D1AA08" }}
        />
        <p className={classes.label}>
          Total Glass Weight (kg)<spam>{props.totalGlassWeight}</spam>
        </p>
      </div>
      <div item className={classes.item}>
        <CompareArrowsIcon className={classes.icon} />
        <p className={classes.label}>
          Exchange Rate<spam>{props.exchangeRate}</spam>
        </p>
      </div>
    </div>
  );
}

export default Footer;
