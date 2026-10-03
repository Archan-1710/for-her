import { Heart } from "lucide-react";
import CuteCharacterScene from "../components/CuteCharacterScene";
import PageNextButton from "../components/PageNextButton";

function Home() {
  return (
    <main className="page home-page">
      <div className="home-content">
        <p className="eyebrow">A tiny corner of the internet made for</p>

        <h1>
          My Favorite
          <span> Person.</span>
        </h1>

        <div className="tiny-heart">
          <Heart fill="currentColor" />
        </div>

        <p className="home-message">
          I know I tell you that I love you all the time...
          <br />
          but sometimes those three words don't feel like enough.
        </p>

        <div className="home-character-wrap">
          <CuteCharacterScene />
        </div>

        <p className="handwriting">
          So I made you a little something instead ♡
        </p>

        <PageNextButton to="/story" label="Open My Heart ♡" />
      </div>

      <div className="corner-note">
        made with an unreasonable amount of love ♡
      </div>
    </main>
  );
}

export default Home;
