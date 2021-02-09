import { useEffect, useState } from "react";
import Navbar from '../../components/Navbar';
import data from '../../static-variables';
import Post from '../../components/Post';
import PostCard from "../../components/PostCard";
import Link from "next/link";
function blog(props) {
    let [postsLength, setPostsLength] = useState(0);
    let [blogPosts, setBlogPosts] = useState([]);
    useEffect(async () => {
        try {
            let { posts = [] } = await (await fetch(data.blog)).json();
            console.log(posts);
            setBlogPosts(posts.map(post => ({ ...post, content: post.content.replace(/<img/gi, `<img class="post-img"`) })));
            setPostsLength(posts.length);
        } catch (ex) {
            alert("Error in getting blog posts!");
        }
    }, []);
    return (
        <div className="container">
            <div className="banner">
                <div className="banner-overlay">
                    <ul>
                        <li><Link className="banner-overlay-link" href="/">Home</Link></li>
                        <li><Link className="banner-overlay-link" href="/about">About</Link></li>
                        <li><Link className="banner-overlay-link" href="/blog">Blog</Link></li>
                    </ul>
                    <div className="banner-overlay-text">
                        <h1>Abdul Mohaimin's blog.</h1>
                        <h2>#nam_c</h2>
                    </div>
                </div>
            </div>
            <div className="blog-grid">
                {
                    blogPosts.map((post,i)=><PostCard key={i} {...post}/>)
                }
            </div>
            <style jsx>{`
            .container {
                height: 100vh;
                width: 100%;
            }
            
            .banner {
              height: 40%;
              width: 100%;
              background-image: url("https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
              background-color: black;
              background-repeat: no-repeat;
              background-position: center;
              background-size: cover;
            }
            .banner-overlay {
              background-color: rgba(0, 0, 0, 0.6);
              height: 100%;
              width: 100%;
              color: white;
              display: flex;
              /* justify-content: center; */
              align-items: center;
              flex-direction: column;
            }
            .banner-overlay-text h1{
              text-align: right;
              margin-top: 10%;
            }
            .banner-overlay-text h2{
              text-align: right;
            }
            
            .banner-overlay ul {
              margin-top: 1rem;
              list-style-type: none;
              display: flex;
              align-self: flex-end;
              top: 0;
            }
            .banner-overlay ul li {
              margin-right: 1rem;
            }
            .banner-overlay-link {
              text-decoration: none;
              color: white;
              font-weight: bold;
            }
            .blog-content {
              font-size: .99rem;
              margin: 2rem 4rem;
            }
            .blog-grid {
                padding:3rem;
                display:grid;
                grid-template-columns: repeat(auto-fit,minmax(20rem,1fr)) ;
                gap:1rem;
                justify-content:center;
            }
            @media only screen and (max-width: 768px) {
              .container {
                padding:0;
              }
              .banner-overlay-text h1 {
                font-size:.99rem;
                padding:0;
              }
              
              .banner-overlay-text h2 {
                font-size:.89rem;
                padding:0;
              }
              .banner {
                height: 25%;
                width: 100%;
              }
              
              .blog-content {
                font-size: .9rem;
                margin: 2rem 1rem;
              }
            }
            
            
            `}</style>
        </div>
    );
}

export default blog;