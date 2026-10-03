function FloatingHearts() {
  const hearts = Array.from({ length: 12 });

  return (
    <div className="floating-hearts">
      {hearts.map((_, index) => (
        <span
          key={index}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${8 + Math.random() * 8}s`,
          }}
        >
          ♡
        </span>
      ))}
    </div>
  );
}

export default FloatingHearts;
