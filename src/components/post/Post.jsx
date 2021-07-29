import './post.css'
import {Link} from 'react-router-dom';
export default function Post() {
    return (
        <div className="post">
            <img 
            className="postImg"
            src="https://images.pexels.com/photos/315788/pexels-photo-315788.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
            alt="post image" />

        <div className="postInfo">
            <div className="postCategory">
                <span className="postCat">Bitcoin</span>
                <span className="postCat">Money</span>
            </div>
            <span className="postTitle">
               <Link className="link" to="/post/1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
            </span>
            <hr />
            <span className="postDate">2 hour ago</span>
            <p className="postDes">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad reprehenderit mollitia rem animi
                 reiciendis ex voluptatum voluptas suscipit quasi, veritatis,
                necessitatibus natus quam cupiditate adipisci. Quae modi quasi quidem explicabo harum pariatur.
            </p>
        </div>
            
        </div>
    )
}
