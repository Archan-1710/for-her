import CuteCharacterScene from "../components/CuteCharacterScene";
import PageNextButton from "../components/PageNextButton";

const memories = [
  {
    number: "01",
    title: "And then there was you.",
    text: `I don't think I knew back then just how important you were
    going to become to me. Somehow, little by little, you became
    the person I wanted to tell everything to.`,
  },
  {
    number: "02",
    title: "You became my favorite notification.",
    text: `There is something ridiculously comforting about seeing your
    name appear on my phone. Even after all this time, a message from
    you can still completely change my mood.`,
  },
  {
    number: "03",
    title: "The little things.",
    text: `Your laugh. The random things you say. The way you get annoyed.
    The conversations that make absolutely no sense. Somehow those
    tiny things became some of my favorite parts of life.`,
  },
  {
    number: "04",
    title: "Somewhere along the way...",
    text: `You stopped being just someone I loved spending time with.
    You became comfort. You became peace. You became home.`,
  },
];

function Story() {
  return (
    <main className="page story-page">
      <header className="section-heading">
        <p className="eyebrow">Chapter One</p>
        <h1>
          How you became <em>my person.</em>
        </h1>
        <p>
          There wasn't one single moment. It happened slowly, beautifully,
          and then all at once.
        </p>
      </header>

      <div className="story-character-wrap">
        <CuteCharacterScene />
      </div>

      <section className="timeline">
        {memories.map((memory) => (
          <article className="memory-card" key={memory.number}>
            <span className="memory-number">{memory.number}</span>

            <div>
              <h2>{memory.title}</h2>
              <p>{memory.text}</p>
            </div>
          </article>
        ))}
      </section>

      <div className="page-bottom">
        <p className="handwriting">and that's only the beginning...</p>

        <PageNextButton to="/gallery" label="Something Beautiful ♡" />
      </div>
    </main>
  );
}

export default Story;
