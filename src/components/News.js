import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
   
    constructor() {
        super();
        console.log("I am a constructor from News Component");
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=bdc6d83627ad44498f825a1390b5e5e2"
        let data = await fetch(url);
        let parserData = await data.json();
        this.setState({articles : parserData.articles})
    }

    render() {
        return (
            <div className="container my-1" >
                <h1 className="my-1" >TOP <span style={{color:'blue'}}>HEADLINES</span></h1>
                <div className="row my-2">
                    {this.state.articles.map((element) => {

                        return <div className="col-md-4 my-3" key={element.url}>
                            <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imgUrl={element.urlToImage} newsUrl={element.url} />
                            
                        </div>
                    }) 
                    }
                    
                </div>
                <hr />
                </div>
                )
    }
}

                export default News

