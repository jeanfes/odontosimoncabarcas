import "./section4.scss";

export const Section4 = () => {
  const cards = [
    {
      before: "https://picsum.photos/400/250?grayscale",
      after: "https://picsum.photos/400/250",
      text: "Blanqueamiento de 60 min | +2 tonos",
    },
    {
      before: "https://picsum.photos/401/250?grayscale",
      after: "https://picsum.photos/401/250",
      text: "Blanqueamiento de 50 min | +3 tonos",
    },
    {
      before: "https://picsum.photos/402/250?grayscale",
      after: "https://picsum.photos/402/250",
      text: "Blanqueamiento de 40 min | +5 tonos",
    },
  ];

  return (
    <section className="section4">
      <div className="section4__header">
        <h2>Cuidado experto para cada sonrisa</h2>
      </div>

      <div className="section4__grid">
        {cards.map((card, idx) => (
          <div className="result-card" key={idx}>
            <div className="result-card__images">
              <div className="result-card__image">
                <img src={card.before} alt="Antes" />
                <span className="tag">Antes</span>
              </div>
              <div className="result-card__image">
                <img src={card.after} alt="Después" />
                <span className="tag">Despues</span>
              </div>
            </div>
            <p className="result-card__text">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
