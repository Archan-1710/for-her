import { useState } from "react";
import CuteCharacterScene from "../components/CuteCharacterScene";
import PageNextButton from "../components/PageNextButton";

import photo5 from "../assets/photos/photo5.jpeg";
import photo6 from "../assets/photos/photo6.jpeg";
import photo7 from "../assets/photos/photo7.jpeg";
import photo8 from "../assets/photos/photo8.jpeg";

const photos = [
  {
    src: photo5,
    caption: "Can't get enough of this face. ♡",
    rotate: -3,
  },
  {
    src: photo6,
    caption: "Literally glowing.",
    rotate: 4,
  },
  {
    src: photo7,
    caption: "My absolute favorite person.",
    rotate: -2,
  },
  {
    src: photo8,
    caption: "Forever my favorite view.",
    rotate: 3,
  },
];

function Gallery2() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <main className="page gallery-page">
      <header className="section-heading">
        <p className="eyebrow">My favorite view • Part 2</p>

        <h1>
          Still you. <em>Even prettier.</em>
        </h1>

        <p>
          Because four photos could never be enough to capture all your magic.
        </p>
      </header>

      <div className="gallery-character-wrap">
        <CuteCharacterScene />
      </div>

      <div className="photo-wall">
        {photos.map((photo, index) => (
          <button
            className="polaroid"
            key={index}
            onClick={() => setSelectedPhoto(photo)}
            style={{
              "--rotation": `${photo.rotate}deg`,
            }}
          >
            <img src={photo.src} alt={`Memory ${index + 5}`} />

            <p>{photo.caption}</p>

            <span className="tape" />
          </button>
        ))}
      </div>

      <p className="gallery-note">
        ♡ Every single photo of you is my new favorite.
      </p>

      {selectedPhoto && (
        <div className="photo-modal" onClick={() => setSelectedPhoto(null)}>
          <div className="modal-polaroid" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedPhoto(null)}>
              ×
            </button>

            <img src={selectedPhoto.src} alt="" />

            <p>{selectedPhoto.caption}</p>
          </div>
        </div>
      )}

      <PageNextButton to="/quiz" label="Take the Quiz ♡" />
    </main>
  );
}

export default Gallery2;
