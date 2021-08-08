import './post.css'
import {Link} from 'react-router-dom';


export default function Post({post}) {
    return (
        <div className="post">
            {post.photo && (
            <img 
            className="postImg"
            src={post.photo}
            alt="post image" />
        )}
        
        <div className="postInfo">
            <div className="postCategory">
                {post.categories.map(c=>(
                    <span className="postCat">{c.name}</span>
                ))}
            </div>
            <span className="postTitle">
               <Link className="link" to={`/post/${post._id}`}>{post.title}</Link>
            </span>
            <hr />
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            <p className="postDes">
               {post.desc}
            </p>
        </div>
            
        </div>
    )
}
