import './write.css'

export default function Write() {
    return (
        <div className="write">
            <img
            className="writeImg" 
            src="https://images.pexels.com/photos/625409/pexels-photo-625409.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
            alt="" />
            <div className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                    <input className="writeInput" type="text" placeholder="Title"   autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea 
                    placeholder="Tell your story..." 
                    type="text" 
                    className="writeInput writeText"> 
                    </textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </div>
        </div>
    )
}
