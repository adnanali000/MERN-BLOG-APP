import './header.css'

export default function Header() {
    return (
        <div>
            <div className="header">
                <div className="headerTitle">
                    <span className="titleSm">React & Node</span>
                    <span className="titleLg">Blog</span>
                </div>
                <img
                 src="https://images.pexels.com/photos/1080722/pexels-photo-1080722.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                 alt="" 
                 className="headerImg" />
            </div>
        </div>
    )
}
