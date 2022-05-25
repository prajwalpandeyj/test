import React from 'react'
import "./NewsCard.css"

const NewsCard = ({newsItem}) => {

    const fulldate = new Date(newsItem.published_date); // Sat  Jan 09 2021  17:45:30  GMT+0530
    var date = fulldate.toString().split(" "); // ["Sat", "Jan", "09", "2021", "17:45:30", "GMT+0530"]
    
    return (
        <div className="newsCard">
            <img 
            alt={newsItem.title}
            src={
                newsItem.image
                ?newsItem.image
                :"http://www.aaru.edu.jo/websites/aaru2/wp-content/plugins/learnpress/assets/images/no-image.png?Mobile=1&Source=%2F%5Flayouts%2Fmobile%2Fdispform%2Easpx%3FList%3D78b536db%252De7c7%252D45d9%252Da661%252Ddb2a2aa2fbaf%26View%3D6efc759a%252D0646%252D433c%252Dab6e%252D2f027ffe0799%26RootFolder%3D%252Fwebsites%252Faaru2%252Fwp%252Dcontent%252Fplugins%252Flearnpress%252Fassets%252Fimages%26ID%3D4786%26CurrentPage%3D1"}
                className="nImage"
            />
            <div className="nText">
                <div>
                    <span className="title">{newsItem.title}</span>
                    <br/>
                    <span className="author">
                        <a href={newsItem.url} target="_blank"><b>Written </b></a>
                        {" "}
                        on {date[2]} {date[1]} {date[0]}
                        </span>
                    
                </div>
                <div className="nTextLower">
                    <div className="des">{newsItem.full_content}</div>
                    <span class="read">
                        <a href={newsItem.url} target="_blank">
                            {/* <b>{newsItem.source.name}</b> */}
                        </a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default NewsCard
