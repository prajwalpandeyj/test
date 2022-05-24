
import { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';
import NavNews from './components/NavNews';
import NewsContent from './components/NewsContent/NewsContent';
import apikey from './data/config';
import Footer from './components/Footer/Footer';

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setnewsArray] = useState([]);
  const [newsResults, setnewsResults] = useState();;
  const [loadmore, setLoadmore] = useState(20)
  const newsApi=async() =>{
    try{
      const proxyUrl="https://cors-anywhere.herokuapp.com/";
      const url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}`
      const news = await axios.get( url );
      setnewsArray(news.data.articles);
      setnewsResults(news.data.totalResults);
    }catch(error){
        console.log(error)
    }
  };
  console.log(newsArray);
  useEffect(() => {
    newsApi()
  }, [newsResults,category])
  return (
    <div className="App">
      <NavNews setCategory={setCategory}/>
      <NewsContent setLoadmore={setLoadmore} loadmore={loadmore} newsArray={newsArray} newsResults={newsResults}/>
      <Footer/>
    </div>
  );
}  

export default App;
