import { Button, Container } from '@material-ui/core'
import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
import "./NewsContent.css"

const NewsContent = ({newsArray,newsResults, loadmore,setLoadmore}) => {
    return (
        <Container maxWidth="md"> 
            <div className="content">
                <div>

                </div>
                {
                    newsArray.map((newsItem) =>(
                        <NewsCard newsItem={newsItem} key={newsItem.title}/>
                    ))
                }
                
            </div>
        </Container>
    )
}

export default NewsContent
