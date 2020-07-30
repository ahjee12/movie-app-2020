import React from 'react';
import Potato from './Potato';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import axios from 'axios';
import Movie from './Movies';
import './App.css';

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
    const {isLoading, movies} = this.state;
    return(
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading....</span>
          </div>
        ):(
          <div className="movies">
            {movies.map(movies=>(
              <Movie 
                key={movies.id}
                id={movies.id}
                year={movies.year}
                title={movies.title}
                summary={movies.summary}
                poster={movies.medium_cover_image}
                genres={movies.genres}
              />
            ))}
          </div>
        )

        }

        </section>
    );
    
  }
}

export default App;
