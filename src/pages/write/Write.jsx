import "./write.css";

export default function write() {
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?cs=tinysrgb&dpr=1&w=500"
        alt="Wildlife"
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label for="fileInput">
            <i className="writeIcon fas fa-plus-circle"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story ... "
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">PUBLISH</button>
      </form>
    </div>
  );
}
