import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.button`
  margin-top: 3rem;
  padding: .8rem 3rem;
  background-color: #fff;
  border: 2px solid #ffa500;
  border-radius: .7rem;
  outline: none;
  cursor: pointer;
  transition: .35s;

  &:hover {
    background-color: #ffa500;
    border-color: #fff;
    color: #333;
  }
`;

const Detail = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { id, title, year, summary, mediumCoverImage, genres } = location.state
  const goBackHandler = () => {
    navigate(-1, { replace : true })
  }

  return (
    <div className="Movie_detail inner" data-id={ id }>
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
      <Button onClick={ goBackHandler }>뒤로가기</Button>
    </div>
  )
}

export default Detail