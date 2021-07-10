import "./topbar.css";

export default function topBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i class="fab fa-facebook"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-instagram"></i>
      </div>
      <div className="topCenter">Kerea</div>
      <div className="topRight">of Kerea</div>
    </div>
  );
}
