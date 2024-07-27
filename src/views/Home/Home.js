import React, { useEffect, useState } from 'react'
import "./Home.css"
import axios from 'axios'
import NewsArticle from '../../components/NewsArticle/NewsArticle'

function Home() {
    const [news, setNews] = useState([])
    const [searchQuery, setSearchQuery] = useState("pune")

    const loadNews = async () => {
      try{
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&from=2024-07-21&to=2024-07-21&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`);

        setNews(response.data.articles)
      }
      catch(error){
        console.log(error);
      }
    }

    useEffect(() => {
        loadNews()
    }, [])

    useEffect(()=>{
        loadNews();
    },[searchQuery])

    return (
        <div>
            <h1 className='main-title'>News App</h1>
            <input type='text'
                value={searchQuery}
                className='search-input'
                onChange={(e) =>setSearchQuery(e.target.value)}
            />
            <div className='news-container'>
                {
                    news.map((newsArticle, i) => {

                        const {
                            author,
                            title,
                            description,
                            url,
                            urlToImage,
                            publishedAt,
                            content
                        } = newsArticle
                        return (
                            <NewsArticle
                                key={i}
                                author={author}
                                title={title}
                                description={description}
                                url={url}
                                urlToImage={urlToImage}
                                publishedAt={publishedAt}
                                content={content}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home