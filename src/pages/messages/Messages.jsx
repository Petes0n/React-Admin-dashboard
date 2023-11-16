import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ClearIcon from "@mui/icons-material/Clear";
import "./messages.scss";
import { messagesData } from "../../data";
import { Button, Divider } from "@mui/material";

export default function Messages() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <div className="report-new">
        <div className="report-newContainer">
          <div className="message-top">
            <h1>Messages</h1>
          </div>
        </div>
      </div>
      <div className="message-data">
        {messagesData.map((message) => (
          <Accordion
            expanded={expanded === message.id}
            onChange={handleChange(message.id)}
            key={message.id}
          
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <img
                className="message-img"
                src={message.img}
                alt=""
                sx={{ flexShrink: 0 }}
              />

              <Typography
                sx={{ marginLeft: "40px", color: "black" }}
                variant="h5"
              >
                {message.name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{message.message}</Typography>
              <Divider />
              <Button title="Remove" sx={{ color: "red" }}>
                <ClearIcon />
                <span>Remove message</span>
              </Button>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
