import './singlePost.css';

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img
                className="singlePostImg"
                src="https://images.pexels.com/photos/315788/pexels-photo-315788.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.

                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Adnan</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDes">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    dolore unde ut temporibus, tempora animi nesciunt nulla, quod ratione numquam. Quia quasi labore quas accusamus laborum?
                    Eveniet voluptate magni beatae nam eaque veritatis
                     dolore unde ut orem ipsum dolor sit amet consectetur, adipisicing elit. 
                    dolore unde ut temporibus, tempora animi nesciunt nulla, quod ratione numquam. Quia quasi labore quas accusamus laborum?
                    Eveniet voluptate magni beatae nam eaque veritatis
                     dolore unde ut orem ipsum dolor sit amet consectetur, adipisicing elit. 
                    dolore unde ut temporibus, tempora animi nesciunt nulla, quod ratione numquam. Quia quasi labore quas accusamus laborum?
                    Eveniet voluptate magni beatae nam eaque veritatis
                     dolore unde ut 
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    dolore unde ut temporibus, tempora animi nesciunt nulla, quod ratione numquam. Quia quasi labore quas accusamus laborum?
                    Eveniet voluptate magni beatae nam eaque veritatis
                     dolore unde ut temporibus, tempora animi nesciunt nulla, quod ratione numquam. Quia quasi labore quas accusamus laborum?
                </p>
            </div>
        </div>
    )
}
