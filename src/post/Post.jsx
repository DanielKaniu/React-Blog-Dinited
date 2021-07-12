import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Big Five</span>
          <span className="postCat">WildBeest Migration</span>
        </div>
        <span className="postTitle">Flora and fauna</span>
        <hr />
        <span className="postDate">30 minutes ago</span>
      </div>
    </div>
  );
}
