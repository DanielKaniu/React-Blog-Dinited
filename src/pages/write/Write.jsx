import "./write.css";

export default function write() {
  return (
    <div className="write">
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
