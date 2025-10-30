const Movie = ({ id, title, year, summary, mediumCoverImage, genres }) => {
  return (
    <div className="Movie" data-id={ id }>
      <img src={ mediumCoverImage } alt={ title } title={ title } />
      <div className="Movie_data">
        <h3 className="Movie_title">{ title }</h3>
        <p className="Movie_year">{ year }</p>
        <ul className="Movie_genres">
          {
            genres.map(genre => (
              <li 
                key={ genre }
                className="Movie_genre"
              >{ genre }</li>
            ))
          }
        </ul>
        <p className="Movie_summary">{ summary }</p>
      </div>
    </div>
  )
}

export default Movie