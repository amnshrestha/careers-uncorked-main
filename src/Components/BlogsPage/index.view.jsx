import React from 'react'

import articleList from "./index.data"
import ContactFooter from "../ContactFooter"

import BlogsBGPicture from "../../assets/images/Backgrounds/BlogsBG.png"

import $ from 'jquery';
import "./index.css";

const BlogsPage = () => {
    const changeNavColor = ()=>{
        $(".navbar").css("background-color","rgb(15, 8, 80)")
    }
    changeNavColor();
    const articleDesign = (articleList) => {
        return articleList.map(eachArticle => {
            return (
                
                <div className="articlePresented">
                    <a href={eachArticle.link} target="_blank">
                        <img src={eachArticle.image} alt="articleImage" className="articleImage"/>
                        <div className="articleInfo">
                            {eachArticle.title}<br/>
                        </div>
                    </a>
                </div>
                
            )
        })
    }
    const blogsBG = {
        background: `url(${BlogsBGPicture}) no-repeat center center fixed`,
    }
    return (
        <section id = "blogsPage" style = {blogsBG}>
            <br/>
            <div className="pageTitle">Blogs</div>
            <div className="listOfArticles">
                {articleDesign(articleList)}
            </div>
            <br/>
            <ContactFooter/>
            
        </section>
    )
}

export default BlogsPage
