import React from 'react';
import Potato from './Potato';
import PropTypes from 'prop-types';

function Food({name, picture, rating}){
  // console.log(props);
  return (
  
  <div>
    <h1>I LOVE {name}</h1>
    <h2>{rating}/5.0</h2>
    <img src={picture} alt={name} />
  </div>
  )
}

const foodLike = [
  {
    id:1,
    name : 'kimchi',
    image : 'https://www.koreanbapsang.com/wp-content/uploads/2016/10/DSC_1843-e1477360668451.jpg',
    rating : 4,
  },
  {
    id:2,
    name : 'Samgyetang',
    image : 'https://www.dtnews24.com/news/photo/201906/550573_187326_446.gif',
    rating : 4.7,
  },
  {
    id:3,
    name : 'bibimbap',
    image : 'https://minimalistbaker.com/wp-content/uploads/2019/05/Bibimbap-SQUARE.jpg',
    rating : 4.5,
  }
]

function renderFood(dish){
  return <Food key={dish.id} name={dish.name} picture={dish.image} alt={dish.name} rating={dish.rating} />;
}
  

function App() {
  console.log(foodLike.map(renderFood));
  return (
    <div>
      <h1>HELLO</h1>
      <p>JSX = jAVASCRIPT + HTML (JSX 컴포넌트)</p>
      <p>props = 매개변수</p>
      <Potato />
      {/* <Food fav="Kimchi" />
      <Food fav="chukumi" />
      <Food fav="삼겹살"/> */}
      {/* {foodLike.map(dish =>(<Food name={dish.name} picture={dish.image}/>))} */}
      <div>
        {foodLike.map(renderFood)}
      </div>
    </div>
  )
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired,
}

export default Appcopy1;
