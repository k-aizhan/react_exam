import React from 'react';

const Features = () => {
  return (
    <section className="features">
      <div className="feature-card">
        <h3>Система распределения задач</h3>
        <p>Эффективное распределение задач между водителями</p>
      </div>
      <div className="feature-card">
        <h3>Отслеживание состояния заказа</h3>
        <p>Эффективный контроль состояния вашего заказа</p>
      </div>
      <div className="feature-card">
        <h3>Грузоперевозки по городу и регионам</h3>
        <p>Быстрая доставка на короткие и длинные расстояния</p>
      </div>
      <div className="feature-card">
        <h3>Обновления в режиме реального времени </h3>
        <p>Будьте в курсе всех событий</p>
      </div>
    </section>
  );
};

export default Features;
