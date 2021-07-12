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
      <div className="postDesc">
        The wildebeest, seemingly assembled from the wreckage of all the other
        plains species, is one of Africa’s most charismatic creatures. Despite
        the appearance of an evolutionary calamity, it is also one of the most
        successful. When herds around two million strong gather together to
        migrate between the southern parts of the Serengeti National Park and
        the Masai Mara Game Reserve, you find one of the most dramatic wildlife
        events on the planet.
      </div>
    </div>
  );
}
