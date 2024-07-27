import React from 'react'
import './NewsArticle.css'

function NewsArticle({ author,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    content}) {
    return (
        <div className='news-article-card' >
            <img src={urlToImage} alt='img' className='news-asrticle-img' />
            <h1 className='article-title'> {title} </h1>
            <div className='article-info'>
                <p className='article-author'> {author} </p>
                <p className='article-publishedAt'> {publishedAt} </p>
            </div>

            <p className='article-description'> {description} </p>

            <a href={url} target='_blank' className='btn'>Read More</a>
        </div>
    )
}

export default NewsArticle