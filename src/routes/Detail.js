import React, { Component } from 'react';

export default class Detail extends Component {
    componentDidMount(){
        const { location, history } = this.props;
        location || history.push('./');
    }
    render() {
        const { location } = this.props;
        const { title, year, poster, genres, summary } = this.props.location.state;
        if(location.state){
            return (
                <div className="detail">
                    <h3>{title}</h3>
                    <h5>{year}</h5>
                    <img src={poster} alt="poster" name="poster"></img>
                    <ul>
                        {genres.map( (genre, index) => <li key={index}>{genre}</li>)}
                    </ul>
                    <p>{summary}</p>
                </div>
            )
        } else {
            return null;
        }
    }
}
