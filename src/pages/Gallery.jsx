import { useState } from "react";
import CuteCharacterScene from "../components/CuteCharacterScene";
import PageNextButton from "../components/PageNextButton";

import photo1 from "../assets/photos/photo1.jpeg";
import photo2 from "../assets/photos/photo2.jpeg";
import photo3 from "../assets/photos/photo3.jpeg";
import photo4 from "../assets/photos/photo4.jpeg";

const photos = [
  {
    src: photo1,
    caption: "How am I supposed to not stare? ♡",
    rotate: -4,
  },
  {
    src: photo2,
    caption: "My favorite smile.",
    rotate: 3,
  },
  {
    src: photo3,
    caption: "Pretty is an understatement.",
    rotate: -2,
  },
  {
    src: photo4,
    caption: "Yeah... I'm keeping you.",
    rotate: 4,
  },
];

function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <main className="page gallery-page">
      <header className="section-heading">
        <p className="eyebrow">My favorite view • Part 1</p>

        <h1>
          You. <em>Always you.</em>
        </h1>

        <p>
          A very small collection of the girl who somehow manages
          to look beautiful without even trying.
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
            <img src={photo.src} alt={`Memory ${index + 1}`} />

            <p>{photo.caption}</p>

            <span className="tape" />
          </button>
        ))}
      </div>

      <p className="gallery-note">
        ♡ Somehow my camera roll got prettier after you entered my life.
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

      <PageNextButton to="/gallery-2" label="More Pictures ♡" />
    </main>
  );
}

export default Gallery;
