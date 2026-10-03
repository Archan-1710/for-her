function CuteCharacterScene() {
  return (
    <div className="cute-character-scene" aria-label="Cute animated bear characters">
      <div className="bear bear-left">
        <div className="ear ear-left" />
        <div className="ear ear-right" />
        <div className="face">
          <span className="eye eye-left" />
          <span className="eye eye-right" />
          <span className="blush blush-left" />
          <span className="blush blush-right" />
          <span className="nose" />
          <span className="mouth" />
        </div>
      </div>

      <div className="bear bear-right">
        <div className="ear ear-left" />
        <div className="ear ear-right" />
        <div className="face">
          <span className="eye eye-left" />
          <span className="eye eye-right" />
          <span className="blush blush-left" />
          <span className="blush blush-right" />
          <span className="nose" />
          <span className="mouth" />
        </div>
      </div>

      <div className="mini-hearts">
        <span>♡</span>
        <span>♡</span>
        <span>♡</span>
      </div>
    </div>
  );
}

export default CuteCharacterScene;
