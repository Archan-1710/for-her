import { useState } from "react";
import { Heart } from "lucide-react";
import CuteCharacterScene from "../components/CuteCharacterScene";
import PageNextButton from "../components/PageNextButton";

function Letter() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="page letter-page">
      {!opened ? (
        <div className="envelope-section">
          <p className="eyebrow">One last thing...</p>

          <h1>I left something here for you.</h1>

          <div className="letter-character-wrap">
            <CuteCharacterScene />
          </div>

          <button className="envelope" onClick={() => setOpened(true)}>
            <div className="envelope-back" />

            <div className="envelope-letter">
              <Heart fill="currentColor" />
            </div>

            <div className="envelope-front" />
          </button>

          <p className="handwriting">tap the letter ♡</p>

          <PageNextButton to="/" label="Back to Beginning ♡" />
        </div>
      ) : (
        <>
          <article className="love-letter">
            <p className="letter-date">To my favorite person,</p>

            <h1>If you ever forget...</h1>

            <p>
              I hope you know how much you mean to me.
            </p>

            <p>
              You're the person I want to tell about the stupid little
              things that happen during my day. You're the person whose
              messages I look for without even realizing I'm doing it.
            </p>

            <p>
              I love your smile. I love your laugh. I love the little
              things about you that you probably don't even notice.
            </p>

            <p>
              And I love that somewhere in this ridiculously huge world,
              I somehow found you.
            </p>

            <div className="letter-highlight">
              You are my favorite conversation.
              <br />
              My favorite notification.
              <br />
              My favorite smile.
              <br />
              My favorite person.
            </div>

            <p>
              I know I say "I love you" a lot.
            </p>

            <p>
              But somehow those three words still don't seem big enough
              for everything I feel when it comes to you.
            </p>

            <div className="final-message">
              <Heart fill="currentColor" />

              <h2>
                I love you.
                <br />
                More than this little website
                <br />
                could ever explain.
              </h2>
            </div>

            <p className="signature">
              Forever yours,
              <br />
              <span>Your Name ♡</span>
            </p>
          </article>

          <PageNextButton to="/" label="Back to Beginning ♡" />
        </>
      )}
    </main>
  );
}

export default Letter;
