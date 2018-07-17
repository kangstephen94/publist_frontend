import React from 'react';
import axios from 'axios';
import {Article} from './article';

class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount () {
        axios.get(`/articles`)
            .then((response) => {
                const articles = response.data.data;
                this.setState({data: articles})
            })
            .catch(function (error) {
                console.log('error!');
            });
    }

    render () {
        console.log(this.state);   
        const {data} = this.state;
        return (
            <ul className='news'>
                {data.map ( article => {
                    return (<Article article={article}/>);
                })}
            </ul>
        )   
    }
}

export default News;