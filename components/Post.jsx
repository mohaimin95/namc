import React from 'react';
import Categories from './Categories';
import Tags from './Tags';
import Link from 'next/link';
export function PostTemplate({
    ID,
    title,
    author,
    date,
    categories,
    tags,
    children
}) {
    return (
        <div className="post">
            <div className="post-header">
                <h1><Link href={`/blog/${trimStringForUrl(title)}/${ID}`}>{title}</Link></h1>
                <h2><span>by</span>&nbsp;{author.first_name}&nbsp;<span>on</span>&nbsp;{new Date(date).toLocaleDateString()}</h2>
                <Categories categories={categories} />
                {/* <p dangerouslySetInnerHTML={{ __html: excerpt }}></p> */}
                {children}
                <Tags tags={tags} />
            </div>
            <style jsx>{`
            .post {
                margin:1rem 0;
            }
            .post-header {
                width:100%;
            } 
            
            .post-header h1 {
                font-size:1.5rem;
            } 
            
            .post-header h2 {
                font-size:.8rem;
            } 
            
            .post-header p {
                margin:.5rem 0;
            } 
            
            .post-header h2 span {
                font-weight:normal;
            } 



            `}</style>
        </div>
    );
}
function Post({ post }) {
    return (
        <PostTemplate {...post}>
            <p dangerouslySetInnerHTML={{ __html: post.excerpt }}></p>
        </PostTemplate>

    )
}
const trimStringForUrl = str => String(str).replace(/[^A-z0-9 ]/gi,'').replace(/ /g,'-').toLowerCase();
export default Post;