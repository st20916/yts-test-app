import { useEffect, useState } from 'react'
import axios from 'axios'
import Movie from '../components/Movie'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [movies, setMovies] = useState([])

  // 합쳐서 만들 시
  // const [state, setState] = useState({
  //   isLoading : true,
  //   movies : []
  // })

  const getMovies = async () => {
    // 객체 구조 분해 할당
    const response = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
    const data = await response.data.data.movies

    setMovies(data)
    setIsLoading(false)
  }

  useEffect(() => {
    getMovies()
  }, [movies])

  return (
    <>
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
    </>
  )
}


export default Home