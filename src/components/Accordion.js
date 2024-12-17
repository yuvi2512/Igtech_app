import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionPage = () => {
  return (
    <div style={{ padding: "20px", alignItems: "center" }}>
      <Typography variant="h4" gutterBottom>
        Do You have any question
      </Typography>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>How to contact with riders emergency?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Demo Data</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>App Installation failed , how to imporve?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Demo Data</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Website Response taking time, how to improve?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Demo Data</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography>New Update fixed all bug and issues</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Demo Data</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionPage;
