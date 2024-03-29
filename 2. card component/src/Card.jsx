import profilePic from './assets/IMG_1.jpg';

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile picture"></img>
      <h2 className="card-title">Fernando</h2>
      <p className="card-text">Web developer</p>
    </div>
  );
}

export default Card;
