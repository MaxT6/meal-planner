import * as actionCreators from "../state/action-creators";
import { connect } from "react-redux";
import React from 'react';
import hero from '../images/meal-hero.jpg';
import { RxMagnifyingGlass } from 'react-icons/rx';
import { useNavigate } from "react-router-dom";
// import { HiMagnifyingGlass } from 'react-icons/hi2';

const Hero = (props) => {
  // console.log(props)
  

  const onInputChange = evt => {
    props.searchStateFunction.meal = evt.target.value
    // props.inputChange(props.searchStateFunction.meal) //IS THIS NEEDED? Seems to work without it. 
    // console.log("evt.target.value", evt.target.value)
    // console.log("props.searchStateFunction.meal", props.searchStateFunction.meal)
}

const navigate = useNavigate();
const onSubmit = evt => {
    evt.preventDefault();
    props.fetchMeal(props.searchStateFunction.meal);
    navigate('/meals');
}

  return (
    <div className='w-full h-screen'>
      <img className='top-0 left-0 w-full h-screen object-cover' src={hero} alt="Tagline with food as the backdrop" />
      <div className='bg-black/10 absolute top-0 left-0 w-full h-screen'> {/* adds a transparent shade of black overlaying image */}
      <div className='flex justify-center mt-5 w-[87%] ml-5 lg:ml-0'>
      {/* <h2 className='font-bold text-slate-500 text-5xl md:text-5xl lg:text-5xl drop-shadow-2xl'> Fudes: Meals for Dudes</h2> */}
      </div>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-black'>
          <div className='mt-5 left -[2%] md:left-[15.5%] lg:left-[29.5%] max-w-[1100px] m-auto absolute p-4'>
            <h1 className='font-bold text-white text-5xl md:text-7xl lg:text-8xl drop-shadow-2xl'>Plan Meals </h1>
            <p className='md:mb-2.5 font-bold text-3xl md:text-6xl lg:text-6xl drop-shadow-2xl w-10/12 md:w-8/12 lg:w-7/12 mb-2'>So your signficant other believes you are good at this</p>
            {/* <div>
              <input 
              className='absolute placeholder:italic placeholder:text-slate-500 block bg-white w-6/12 border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
              placeholder='search'
              type="text"/>
            </div> */}
            <form 
              id="form" 
              onSubmit={onSubmit}
              className="relative block">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                {/* <svg className="h-5 w-5 fill-black-300" viewBox="0 0 20 20">{RxMagnifyingGlass}</svg> */}
                <RxMagnifyingGlass className="h-8 w-8 text-slate-500 fill-slate-300" viewBox="0 -2 20 20" /> {/* Viewbox adjust icon placement in bar */}
              </span>
              <input 
                id="mealSearch" 
                onChange={onInputChange}
                className=" w-3/5 placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
                placeholder="Search for a meal..." 
                type="text" 
                name="search"/>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default connect(st => st, actionCreators)(Hero)