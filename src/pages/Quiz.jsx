import { useState } from "react";
import { Heart } from "lucide-react";
import CuteCharacterScene from "../components/CuteCharacterScene";
import PageNextButton from "../components/PageNextButton";

const questions = [
  {
    question: "Be honest... who misses the other person more?",
    answers: [
      { text: "Obviously you 😌", correct: true },
      { text: "Me 👀", correct: false, runaway: true },
    ],
  },
  {
    question: "What happens when I finally see you?",
    answers: [
      { text: "A normal hello", correct: false, runaway: true },
      { text: "The longest hug ever ❤️", correct: true },
    ],
  },
  {
    question: "How cute am I?",
    answers: [
      { text: "Very cute", correct: false },
      { text: "Unfairly cute 😤", correct: true },
    ],
  },
  {
    question: "Would you steal my hoodie?",
    answers: [
      { text: "Absolutely.", correct: true },
      { text: "Never", correct: false, runaway: true },
    ],
  },
  {
    question: "Last question. Are you planning on getting rid of me?",
    answers: [
      { text: "Unfortunately, no ❤️", correct: true },
      { text: "Yes 😈", correct: false, runaway: true },
    ],
  },
];

function RunawayButton({ children }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const runAway = () => {
    const x = Math.random() * 220 - 110;
    const y = Math.random() * 140 - 70;

    setPosition({ x, y });
  };

  return (
    <button
      className="quiz-button runaway-button"
      onMouseEnter={runAway}
      onTouchStart={runAway}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      {children}
    </button>
  );
}

function Quiz() {
  const [current, setCurrent] = useState(0);
  const [finished, setFinished] = useState(false);
  const [message, setMessage] = useState("");

  const question = questions[current];

  const chooseAnswer = (answer) => {
    if (!answer.correct) {
      setMessage("Hmm... suspicious answer 🤨");
      return;
    }

    setMessage("Correct answer 😌❤️");

    setTimeout(() => {
      setMessage("");

      if (current === questions.length - 1) {
        setFinished(true);
      } else {
        setCurrent((prev) => prev + 1);
      }
    }, 700);
  };

  if (finished) {
    return (
      <main className="page quiz-page">
        <div className="quiz-card result-card">
          <Heart size={60} fill="currentColor" className="result-heart" />

          <p className="eyebrow">Official Results</p>

          <h1>Girlfriend examination passed.</h1>

          <div className="score">100%</div>

          <p>
            Congratulations. After an extremely scientific and
            completely unbiased examination, it has been determined
            that you are officially stuck with me.
          </p>

          <p className="handwriting">
            No refunds. No exchanges. Lifetime subscription only. ♡
          </p>

          <PageNextButton to="/letter" label="Read My Letter ♡" />
        </div>
      </main>
    );
  }

  return (
    <main className="page quiz-page">
      <div className="quiz-card">
        <div className="quiz-top">
          <span>Girlfriend Examination</span>

          <span>
            {current + 1}/{questions.length}
          </span>
        </div>

        <div className="progress">
          <div
            style={{
              width: `${((current + 1) / questions.length) * 100}%`,
            }}
          />
        </div>

        <p className="eyebrow">Very serious question</p>

        <h1>{question.question}</h1>

        <div className="quiz-options">
          {question.answers.map((answer, index) =>
            answer.runaway ? (
              <RunawayButton key={index}>{answer.text}</RunawayButton>
            ) : (
              <button
                key={index}
                className="quiz-button"
                onClick={() => chooseAnswer(answer)}
              >
                {answer.text}
              </button>
            )
          )}
        </div>

        <div className="quiz-message">{message}</div>
      </div>

      <div className="page-bottom quiz-bottom">
        <PageNextButton to="/letter" label="Read My Letter ♡" />
      </div>
    </main>
  );
}

export default Quiz;
