import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import data from '../../../static-variables';
import {PostTemplate} from '../../../components/Post';
function PostPage(props) {
    let [post,setPost] = useState(null);
    let router = useRouter();
    useEffect(async ()=>{
        try {
            if(router && router.query && router.query.postId) {
                let post = await (await fetch(data.blogPost(router.query.postId))).json(); 
                setPost(post);
            }
        } catch(ex) {

        }
    },[router])
    return (
        <div className="container">
            {post ? (
                <div>
                    
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.excerpt.replace(/<[^>]*>?/gm, '').replace("[&hellip;]", '...')}/>
            </Head>
                <article className="post-container">
                    
                <PostTemplate {...post}>
                    <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
                </PostTemplate>
                </article>

                </div>
            ) : (<div>
                <p>loading...</p>
            </div>)}
        </div>
    );
}

export default PostPage;