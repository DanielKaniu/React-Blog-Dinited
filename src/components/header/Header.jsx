import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Dinited Blog</span>
        <span className="headerTitleLg">Stay tuned</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/1096789/pexels-photo-1096789.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="Wildebeest"
      />
    </div>
  );
}
