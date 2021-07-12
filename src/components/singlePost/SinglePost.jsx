import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/1096789/pexels-photo-1096789.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="Wildebeest"
        />
        <h1 className="singlePostTitle">
          Wildebeest Migration
          <div className="singlePostEdit">
            <i class="singlePostIcon fas fa-user-edit"></i>
            <i class="singlePostIcon fas fa-user-times"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Daniel Kaniu</b>{" "}
          </span>
          <span className="singlePostDate"> 45 minutes ago </span>
        </div>
        <div className="singlePostDesc">
          The wildebeest, seemingly assembled from the wreckage of all the other
          plains species, is one of Africa’s most charismatic creatures. Despite
          the appearance of an evolutionary calamity, it is also one of the most
          successful. When herds around two million strong gather together to
          migrate between the southern parts of the Serengeti National Park and
          the Masai Mara Game Reserve, you find one of the most dramatic
          wildlife events on the planet.
        </div>
      </div>
    </div>
  );
}
