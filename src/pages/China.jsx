import React from "react";

const China = () => {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">China</h1>
      </header>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Introduction</h2>
        <p>China, officially the People's Republic of China, is a country in East Asia. It is the world's most populous country, with a population of more than 1.4 billion.</p>
        <img src="/placeholder.svg" alt="Chinese Flag" className="w-full h-auto" />
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Geography</h2>
        <p>China is the third largest country by total area. It spans five geographical time zones and borders 14 different countries.</        <img src="/placeholder.svg" alt="Map of China" className="w-full h-auto" />
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Culture</h2>
        <p>China has a rich cultural history that dates back thousands of years. It is known for its festivals, traditional clothing, and cuisine.</p>
        <img src="/placeholder.svg" alt="Chinese Festival" className="w-full h-auto" />
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Economy</h2>
        <p>China has the world's second-largest economy by nominal GDP and the largest by purchasing power parity (PPP).</p>
        <img src="/placeholder.svg" alt="Chinese Economy" className="w-full h-auto" />
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Tourism</h2>
        <p>China is home to many famous tourist attractions such as the Great Wall, the Forbidden City, and the Terracotta Army.</p>
        <img src="/placeholder.svg" alt="Great Wall of China" className="w-full h-auto" />
      </section>
    </div>
  );
};

export default China;