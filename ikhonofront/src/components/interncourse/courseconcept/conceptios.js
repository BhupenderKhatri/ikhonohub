import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './conceptcover.css';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '64%',
    margin:'auto',
    marginTop:'20px',

   
  },
  mainHeading:{
    margin:'justify-content',
    color:'#113892E3'
   

  }
  ,
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    fontWeight:750
  
  }
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div id="intern_concept_main">
    <div className={classes.root}>
      <h1 className={classes.mainHeading}>Topics Covered</h1>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
       <Typography className={classes.heading} >Learn Swift Programming</Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          In this module you will learn everything about swift programming you will go
through its data types and a lot more.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Intro To IOS App Devlopment</Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You go through Xcode , layouts etc and this will introduce you with the app development in IOS.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>UI Kit Fundamentals</Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography >
          After this module you will be able to know about Outlets and Action View Presentations and Segues and much more.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Network Request and GCD</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You will learn everything about network how to request a network and tips what not to do.  
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography className={classes.heading}>Data Persistence</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You will study about core data , persistence and many more thins which are
related to data persistence.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
     
    </div>
    </div>
  );
}