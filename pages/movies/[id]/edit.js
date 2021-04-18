import React from 'react'
import { getMovieById } from '../../../actions'
import MovieCreateForm from '../../../components/movieCreateForm'

class EditMovie extends React.Component {

    static getInitialProps({query}){
        return {query}
    }

    state = {
        movie: {}
    }

    componentDidMount() {
        const { id } = this.props.query
        getMovieById(id).then(movie => {
            this.setState({movie})
        })
    }

    render() {
        return (
            <div className="container">
                <h1>Edit the Movie</h1>
                {JSON.stringify(this.state.movie)}
                <MovieCreateForm></MovieCreateForm>
            </div>
        )
    }
}

export default EditMovie