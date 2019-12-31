import React, { Component } from 'react';
import "./Detail.css";

export default class Detail extends Component {
    componentDidMount(){
        const { location, history } = this.props;
        console.log(location.state);
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
                        {genres.map( (index, genre) => <li key={index}>{genre}</li>)}
                    </ul>
                    <p>{summary}</p>
                </div>
            )
        } else {
            return null;
        }
    }
}
