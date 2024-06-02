import React from "react";

const Home = () => {
  return (
    <main className="flex h-screen select-none flex-col bg-slate-950">
      <div
        className="flex flex-grow flex-col items-center justify-center gap-3 
    px-3 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#9d00ff7a_100%)]"
      >
        <img src="TitleHome.webp" alt="Home" />
        <p className="max-h-[112px] text-center text-xl text-[#b3b3b3] md:max-h-[96px] md:w-[660px] md:text-3xl">
          ES:En mantenimiento
        </p>
        <p className="max-h-[112px] text-center text-xl text-[#b3b3b3] md:max-h-[96px] md:w-[660px] md:text-3xl">
          EN:In maintenance
        </p>
      </div>
    </main>
  );
};

export default Home;
