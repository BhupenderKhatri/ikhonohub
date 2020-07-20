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
    width: '50%',
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
       <Typography className={classes.heading} >Python Overview</Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          In this module you will go through python basic and advance and will cover numpy and pandas with all the daya types and their operations. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Statistics and Probability</Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          In this module you will go through different theorms of probability and will also know about hypothesis testing.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Exploratory Data Analysis</Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography >
          In this module  you will be analyzing data by making different plots and will learn how to retrieve information from the data.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>	Introduction to MACHINE LEARNING</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          In this module you will come across the theoretical portion of the machine learning and will study about The supervised and unsupervised learning with their and difference and the application of Machine learning
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography className={classes.heading}>MACHINE LEARNING Tools</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          After this module you will know about the different terms that are used in machine learning and about all the different toolsthat we will be using throughout this course
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <Typography className={classes.heading}>Supervised Learning (classification)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We will learn about classification algorithms and will learn how to implement them of the data set also we will see how we can use different techniques to train and test our model.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7bh-content"
          id="panel7bh-header"
        >
          <Typography className={classes.heading}>Supervised Learning (Regression)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You will come across linear regression and will also learn how we can check the accuracy of our model and how different algorithms have different methods to check their accuracy
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8bh-content"
          id="panel8bh-header"
        >
          <Typography className={classes.heading}>Unsupervised Learning</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You will be studying about different unsupervised algorithms and also will lean to implement them on a dataset
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>
    </div>
  );
}