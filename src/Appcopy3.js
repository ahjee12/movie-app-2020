import React from 'react';
import Potato from './Potato';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import axios from 'axios';
import Movie from './Movies';

class App extends React.Component{
  state ={
    isLoading: true,
    movies: [],
  }

  getMovies = async () =>{ //자바스크립트에게 gotMovies() 함수 시간이 필요, axios.get 실행을 기다려 달라고 전함.
    const { //구조 분해 할당
      data: {
        data: {movies},
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')

    // const movies = axios.get('https://yts.mx/api/v2/list_movies.json'); 
    this.setState({movies: movies, isLoading: false});
    console.log(movies);
    // console.log((await movies).data.data.movies);

  }

  componentDidMount(){
    //영화 데이터 로딩
    // setTimeout(()=>{
    //   this.setState({isLoding : false});
    // },6000);
    // axios.get('https://yts.mx/api/v2/list_movies.json');
    this.getMovies();
  }

  render(){
    const {isLoading, movies} = this.state
    return <div>
      {isLoading 
      ? 'Loading....'
      : movies.map((movies)=>{
        console.log(movies);
        return <Movie 
          key={movies}
          id={movies.id}
          year={movies.year}
          title={movies.title}
          summary={movies.summary}
          poster={movies.medium_cover_image}
        />;
      })}
      </div> 
  }
}

export default App;
