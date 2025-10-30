import { Component } from 'react'
import axios from 'axios'
import './App.css'
import Movie from './Movie'

class App extends Component {
  state = {
    isLoading : true,
    movies : []
  }

  // 통신 상태에 들어가 있는 함수
  // => api 요청하고 있기 때문
  getMovies = async () => {
    // 객체 구조 분해 할당
    const response = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
    const { data : { movies } } = await response.data
    
    // 비동기 처리로 한 데이터를 state 내 movies 데이터에 할당
    this.setState({ movies, isLoading : false })
  }

  // 클래스에서의 Mount
  componentDidMount() {
    this.getMovies()
  }

  render() {
    const { isLoading, movies } = this.state

    return (
      <section className="container inner">
        <h1>YTS Movie App</h1>
        {
          isLoading 
          ? (
              <div className="loader">
                <p className="loader_text">loading ....</p>
              </div>
            )
          : (
              <div className="movies">
                {
                  movies.map(movie => (
                    // <Movie key={ movie.id } movie={ movie } />
                    // 메모리 효율을 위해 필요한 데이터만 넘김
                    <Movie
                      key={ movie.id }
                      id={ movie.id }
                      year={ movie.year }
                      title={ movie.title }
                      summary={ movie.summary }
                      mediumCoverImage={ movie.medium_cover_image }
                      genres={ movie.genres }
                    />
                  ))
                }
              </div>
            )
        }
      </section>
    )
  }
}

export default App