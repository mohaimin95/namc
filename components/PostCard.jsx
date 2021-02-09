import Link from "next/link";
import Categories from "./Categories";
import Tags from "./Tags";

function PostCard({
    ID,
    post_thumbnail,
    categories,
    title,
    excerpt,
    tags,
    author,
    date
}) {
    return (
        <Link href={`/blog/${trimStringForUrl(title)}/${ID}`}>
        <div className={post_thumbnail ? 'post-card-container' : 'post-card-no-img-container'}>
            <div className="post-card-header">
                {post_thumbnail && (
                    <div className="post-card-image">
                        <img className="post-card-image-img" src={post_thumbnail.URL} alt="" />
                    </div>
                )}
                <div className="post-card-content">
                    <Categories categories={categories} />
                    <div className="post-card-content-title">
                        <h4>{title}</h4>
                    </div>

                    <div className="post-card-content-body">
                        <p dangerouslySetInnerHTML={{ __html: excerpt }}></p>
                    </div>

                    <div className="post-card-content-footer">
                        <div className="post-footer-tags">
                        <Tags className="Tags" tags={tags} />

                        </div>
                        <div className="post-author">
                        <h2><span>by</span>&nbsp;{author.first_name}&nbsp;<span>on</span>&nbsp;{new Date(date).toLocaleDateString()}</h2>

                        </div>
                    </div>

                </div>

            </div>
            <style jsx>{`
            .post-card-no-img-container {
                margin:1rem;
                cursor:pointer;
                width:20rem;
                height:12rem;
                background-color:white;
                border:1px #000 solid;
            }
            .post-card-container {
                margin:1rem;
                cursor:pointer;
                width:20rem;
                height:26rem;
                background-color:white;
                border:1px #000 solid;
            }
            .post-card-no-img-container:hover {
                opacity:.8;
                transition:.5s;
            }
            
            .post-card-container:hover {
                opacity:.8;
                transition:.5s;
            }

            .post-card-image {
                width:100%;
            }
            
            .post-card-image-img {
                width:100%;
                height:50%;
            }
            .post-card-content {
                padding:8px;
            }
            .post-card-content-body {
                width:100%;
            } 
            
            .post-card-content-body p {
                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
            } 
            .post-card-content-footer p {
                margin-bottom:auto;
            }

            
            .post-author {
                margin-top:.5rem;
            }
            .post-author h2 {
                font-size:.8rem;
                text-align:right;
            } 
            
            .post-author h2 span {
                font-weight:normal;
            } 
            .post-footer-tags {
                margin-top:.2rem;
            }
            @media only screen and (max-width: 768px) {
            .post-card-header {
                display:flex;
                flex-direction:row;
            }
            .post-card-no-img-container {
                height:auto;
                width:auto;
                margin:0;
                padding:0;
                border:0;
                border-bottom:1px #ccc solid;
            }
            .post-card-container {
                height:auto;
                width:auto;
                margin:0;
                padding:0;
                border:0;
                border-bottom:1px #ccc solid;
            }
            .post-card-image {
                display:none;
            }
            .blog-grid {
                padding:0;
                margin:0;
            }
            }
            `}</style>
        </div>
        </Link>
    );
}
const trimStringForUrl = str => String(str).replace(/[^A-z0-9 ]/gi,'').replace(/ /g,'-').toLowerCase();
export default PostCard;