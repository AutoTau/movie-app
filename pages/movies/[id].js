
import { useRouter } from 'next/router'
import { getMovieById } from '../../actions'

const Movie = (props) => {

    const router = useRouter()
    const { id } = router.query
    const { movie } = props

    return (
        <div className="container">
          {/* <h1>Movie with id: { id }</h1> */}
          <div class="jumbotron">
              <h1 class="display-4">{movie.name}</h1>
              <p class="lead">This is a simple hero unit, a simple jumbotron-style component</p>
              <hr class="my-4" />
              <p>It uses utility classes for typography and spacing to space content out</p>
              <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </div>
          <p>
              Some description about the movie
          </p>
        </div>
    )
}

// call getMovieById("2")
Movie.getInitialProps = async () => {
    const movie = await getMovieById("2")
    return {movie}
}

export default Movie