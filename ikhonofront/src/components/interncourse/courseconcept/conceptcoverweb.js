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
       <Typography className={classes.heading} >Web Programming Introduction</Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          In this module, you will learn basic introduction to web development. The fundamental technology used
to define the structure of a webpage. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>HTML BASICS</Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          In this module you will go through all the basic concepts of html how to use basic tags , how to add
different elements .
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>HTML- Advanced</Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography >
          In this module you will be going through advanced things of html . you will be working of various tags,tables etc. .After this module you will be able to create a basic page using html
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>CSS-3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          After this module you will be able to add the beauty in your webpages. You will go through different fonts and much more and also you will be studying about different ways of styling.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography className={classes.heading}>JavaScript - Introduction</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          In this module you will be learning about the basic concepts of java script and you will learn how to make your web pages alive.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <Typography className={classes.heading}>JavaScript and Cookies</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          In this module you will learn everything about BOM ,DOM and will go various things related to cookies.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7bh-content"
          id="panel7bh-header"
        >
          <Typography className={classes.heading}>Everything about React</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          In this module you will go through JSX , components its lifecycle ,API and much more , after this module
you will be able to answer all the questions based on REACT.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8bh-content"
          id="panel8bh-header"
        >
          <Typography className={classes.heading}>Introduction to Node JS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          In this module you will come across node.js. you will be studying about various models in this model.
You will also be setting up Dev- environment and will go through various moules
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel9bh-content"
          id="panel9bh-header"
        >
          <Typography className={classes.heading}>Node .js continued</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          In this module you will study NPM , how to create web server, debugging and much more.
Atlast you will be going through database connectivity and template engines.
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>
    </div>
  );
}