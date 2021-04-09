import { Link } from '@reach/router';
import React, { Component } from 'react';
import * as api from '../api';

class Nav extends Component {
    state = {
        topics: [],
    }

    componentDidMount() {
        api.fetchTopics().then((topics) => {
            this.setState({ topics })
        })
        
    }

    render() {
        const { topics } = this.state;
    return(
        <nav className='home-nav'>
            <Link key='home' to='/'>All</Link>
            {topics.map((topic) => {
               return <Link key={topic.slug} to={`/${topic.slug}/articles`}>{ topic.slug }</Link>
            })}
            
            
        </nav>
    )
    }
}

export default Nav;
