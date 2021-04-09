import React, { Component } from 'react';
import * as api from '../api';

class ArticlesList extends Component  {
    state = {
        articles: [],
        topics: [],
        isLoading: true,
    }

    componentDidMount() {
        const { topic } = this.props;
        api.fetchArticles(topic).then((articles) => {
            this.setState({articles, isLoading: false});
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.topic !== this.props.topic) {
            const { topic } = this.props;
            api.fetchArticles(topic).then((articles) => {
                this.setState({articles, isLoading: false});
            })
        }
    }

    render() {
        const { articles } = this.state;
        return(
            <main className='articles-list'>
                {articles.map(({article_id, title, created_at, author, topic}) => {
                   return( <section key={article_id}>
                       <h3 >{title}</h3>
                       <p>{topic}</p>
                       <p>{created_at} : by {author}</p>
                       
                    </section>
                   );
                })}
                <section>article</section>
                <section>article</section>
                <section>article</section>
            </main>
        )
    }
}

// {
//     "article_id": 8,
//     "title": "Express.js: A Server-Side JavaScript Framework",
//     "body": "You’re probably aware that JavaScript is the programming language most often used to add interactivity to the front end of a website, but its capabilities go far beyond that—entire sites can be built on JavaScript, extending it from the front to the back end, seamlessly. Express.js and Node.js gave JavaScript newfound back-end functionality—allowing developers to build software with JavaScript on the server side for the first time. Together, they make it possible to build an entire site with JavaScript: You can develop server-side applications with Node.js and then publish those Node.js apps as websites with Express. Because Node.js itself wasn’t intended to build websites, the Express framework is able to layer in built-in structure and functions needed to actually build a site. It’s a pretty lightweight framework that’s great for giving developers extra, built-in web application features and the Express API without overriding the already robust, feature-packed Node.js platform. In short, Express and Node are changing the way developers build websites.",
//     "votes": 0,
//     "topic": "coding",
//     "author": "cooljmessy",
//     "created_at": "2016-06-30T06:59:39.654Z",
//     "comment_count": "7"
//     }

export default ArticlesList