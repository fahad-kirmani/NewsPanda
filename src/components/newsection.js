import React,{useState} from "react";
import { useEffect } from "react";
import Newsitem from "./newsitem";
import Loader from "./loader";
import InfiniteScroll from "react-infinite-scroll-component";


const Newsection=(props)=> {
  const [article, setarticle] = useState([])
  const [loading, setloading] = useState(false)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0);
  document.title=props.cat
  
  const update = async()=>{
    props.setprogress(10)
    let url= `https://newsapi.org/v2/top-headlines?country=in&apiKey=17b4796f9dab4ae1bd63210250bdd5ce&pageSize=${props.pageSize}&category=${props.cat}&page=${page}`
    setloading(true);
    props.setprogress(40)
    let data= await fetch(url)
    let parseddata=await data.json()
    props.setprogress(70)
    console.log(page);
    setarticle(parseddata.articles)
    settotalResults(parseddata.totalResults)
    setloading(false)
    props.setprogress(100)
  }
  useEffect(() => {
    update();
  },[])

  const fetchMoreData= async()=>{
    
    let url= `https://newsapi.org/v2/top-headlines?country=in&apiKey=${props.apikey}&pageSize=${props.pageSize}&category=${props.cat}&page=${page+1}`
    setpage(page+1)
    let data= await fetch(url)
    let parseddata=await data.json()
    setarticle(article.concat(parseddata.articles))
    settotalResults(parseddata.totalResults)
    setloading(false)
  }
    return(
    <>
    <h1 className="my-2 text-center mrg" >NewsPanda - Top {props.cat[0].toUpperCase()+props.cat.slice(1)} Headlines </h1>
    {loading&&<Loader/>}
    <InfiniteScroll
          dataLength={article.length}
          next={fetchMoreData}
          hasMore={article.length !== totalResults}
          loader={<Loader/>}
          endMessage={
          <p style={{ textAlign: 'center' }}>
          <b>That's All For Now!</b>
          </p>}
        >
    <div className="container">
    <div className="row my-3">
     {
      article.map((element) => {
      return (
          <div className="col-md-4 my-2" key={element.url}>
            <Newsitem
              title={element.title!==null?element.title.slice(0, 200):element.title}
              desc={element.description!==null?element.description.slice(0, 150):element.description}
              imgurl={element.urlToImage!==null?element.urlToImage:"https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=440&h=220&q=60"}
              unqurl={element.url}
              date={element.publishedAt}
              author={element.author}
            />
          </div>
      )
     })
     }
        </div>
        </div>
        </InfiniteScroll>
        <hr/>
      </>
    );
  }
Newsection.defaultProps={
  country:"in",
  pageSize:5,
  category:"general"
}

export default Newsection;
