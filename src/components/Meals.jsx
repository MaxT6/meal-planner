//state
import React, { useState } from 'react';
import * as actionCreators from "../state/action-creators";
import { connect } from "react-redux";

import Pagination from '@mui/material/Pagination';

//components
// import AppPagination from './AppPagination';

//services
// import service from "../services/index";

//MUI Card
import heroTable from '../images/table-and-cloth.jpg';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import IosShareRoundedIcon from '@mui/icons-material/IosShareRounded';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const pageSize = 3;

const Meals = (props) => {

  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize
  })

  const [expanded, setExpanded] = useState(false);

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  // console.log("Meal Props", props);
  // console.log("drill 1", props.card.hits);

  //Attempting to map over the results array within the card obj returned by props. 
  //Hoping to have an array of images from the recipes 

  // let resultsArrOfObj = props.card.hits

  // console.log("Item 1", resultsArrOfObj[1][thumbnail_url]);
   let resultsArr = props.card.hits
 

  // console.log("Item 1", props.card.results[1].thumbnail_url);

  // const recipeImgArr = [] 
  // resultsArrOfObj ? resultsArrOfObj.map(result => {
  //   recipeImgArr.push(result.thumbnail_url)
  //   return recipeImgArr
  // }) : ""

  // let thumbnailArr = []
  // for(let i = 0; i<resultsArrOfObj.length; i++) {
  //   if(resultsArrOfObj){recipeImgArr.push(resultsArrOfObj[i])}
  //   console.log("Food pics", recipeImgArr)
  //   recipeImgArr.map(obj => {
  //     thumbnailArr.push(obj.thumbnail_url)
  //   })
  //   if(i=resultsArrOfObj.length) {
  //     return thumbnailArr
  //   }
  // }

// console.log(thumbnailArr)
  
// let arr = props.card.hits

 const handlePageChange = (e, page) => {
  const from = (page - 1) * pageSize;
  const to = (page - 1) * pageSize + pageSize;

  setPagination({ ...pagination, from: from, to: to});
 }

  return (
    <div className='w-full h-screen'>
      <img className='top-0 left-0 w-full h-screen object-cover' src={heroTable} alt='Table with a checked cloth on the bottom'/>

      <div className='bg-black/10 absolute top-0 left-0 w-full h-screen'>
        <div className='absolute top-3 w-full h-2/4 flex flex-col justify-center text-black'>
          <div className='mt-5 w-full h-full m-auto absolute p-4'>
            <div className='flex flex-wrap '>
            {resultsArr ? resultsArr.slice(pagination.from,pagination.to).map((res, idx) => {
              // console.log("instructions: ", res.recipe.image)
              // console.log("firstletter ", res.recipe.label[0])
              let result = res.recipe
              return (
                <Card key={idx} sx={{ maxWidth: 345 }} className="m-auto">
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      {result.label[0]}
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={result.label}
                    subheader={result.dishType[0]}
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image={result.image}
                    alt="Paella dish"
                  />
                  <CardContent>
                  <div  className="flex flex-wrap justify-center gap-[10px]">
                    {result.healthLabels.map((label, idx) => {
                      return (
                      
                          <Typography key={idx} variant="body2" color="text.secondary">
                            {label}
                          </Typography>
                      )
                    })}
                    </div>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to meal plan">
                      <AddCircleRoundedIcon className='text-3xl ' />
                    </IconButton>
                    <IconButton aria-label="recipe Link">
                      <a href={result.url} target='_blank' rel='noreferrer'>
                        <ShareIcon className='text-3xl mt-[-4px]' />
                      </a>
                    </IconButton>
                    <IconButton aria-label="share">
                      <IosShareRoundedIcon className='text-3xl ' />
                    </IconButton>
                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>Ingredients:</Typography>
                      {result.ingredientLines.map((ing, idx) => {
                        return (
                        <Typography key={idx} paragraph>
                          {ing}
                        </Typography>
                        )
                      })}
                          
                      
                    </CardContent>
                  </Collapse>
                </Card>
               //   <div key={idx} className='rounded-md bg-white'>
              //     <img className='mt-3 w-[100px] h-[100px] md:w-[200px] rounded-full md:h-[200px]' src={result.thumbnail_url} alt="recipe result" /> 
              //   </div>
              )
            }) : <h1 className='left-[30%] text-7xl text-white text-center'>LOADING...</h1> }
            </div>
            <div className='flex justify-center'>
              <div className='bg-white/70 w-58 rounded-full'>
              <Pagination count={Math.ceil(4)} color="primary"
              onChange={handlePageChange}
              className="color-white"
              />
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(st => st, actionCreators)(Meals);