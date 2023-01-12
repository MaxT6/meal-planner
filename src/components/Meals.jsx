import React from 'react';
import * as actionCreators from "../state/action-creators";
import { connect } from "react-redux";
import heroTable from '../images/table-and-cloth.jpg';

const Meals = (props) => {
  // console.log("Meal Props", props);
  console.log("drill 1", props.card.results);

  //Attempting to map over the results array within the card obj returned by props. 
  //Hoping to have an array of images from the recipes 

  // let resultsArrOfObj = props.card.results

  // console.log("Item 1", resultsArrOfObj[1][thumbnail_url]);

  let resultsArr = props.card.results

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
  
  

  return (
    <div className='w-full h-screen'>
      <img className='top-0 left-0 w-full h-screen object-cover' src={heroTable} alt='Table with a checked cloth on the bottom'/>

      <div className='bg-black/10 absolute top-0 left-0 w-full h-screen'>
        <div className='absolute top-3 w-full h-2/4 flex flex-col justify-center text-black'>
          <div className='mt-5 w-full h-full m-auto absolute p-4'>
            <div className='flex flex-wrap justify-between'>
            {resultsArr ? resultsArr.map(result => {
              return (
                <div>
                  <img className='mt-3 w-[100px] h-[100px] md:w-[200px] rounded-full md:h-[200px]' src={result.thumbnail_url} alt="recipe result" /> 
                </div>
              )
            }) : <h1 className='left-[30%] text-7xl text-white text-center'>LOADING...</h1> }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(st => st, actionCreators)(Meals);