import "./write.css"

export default function Write() {
    return (
        <div className="write">
            <img 
            className="writeImg"
            src="https://images.pexels.com/photos/1252869/pexels-photo-1252869.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000"
            alt="" />
            <form action="" className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                   <input type="file" id="fileInput" style={{display:"none"}} /> 
                   <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea
                    placeholder="Tell Your Story..." 
                    type="text"
                    className="writeInput writeText"
                    >
                    </textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
