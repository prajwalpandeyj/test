
import { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';
import NavNews from './components/NavNews';
import NewsContent from './components/NewsContent/NewsContent';
import apikey from './data/config';
import Footer from './components/Footer/Footer';

function App() {
  const [category, setCategory] = useState("india_english");
  const [newsArray, setnewsArray] = useState([]);
  const [newsResults, setnewsResults] = useState();;
  const [loadmore, setLoadmore] = useState(20)
  const newsApi=async() =>{
    try{
      // const proxyUrl="https://cors-anywhere.herokuapp.com/";
      // const a="india_english_"
      const url=`https://newsapi.in/newsapi/news.php?key=${apikey}&category=${category}&content_type=full_content`
      const news = await axios.get( url );
      // console.log(news)
      setnewsArray(news.data.News);
      setnewsResults(news.data.success);
    }catch(error){
        console.log(error)
    }
  };
   console.log(newsArray);
  useEffect(() => {
    newsApi()
  }, [newsResults,category]);
  return (
    <div className="App">
      <NavNews setCategory={setCategory}/>
      <NewsContent setLoadmore={setLoadmore} loadmore={loadmore} newsArray={newsArray} newsResults={newsResults}/>
      <Footer/>
    </div>
  );
}  

export default App;
