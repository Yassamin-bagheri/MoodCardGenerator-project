import "../App.css";

function Header() {
  return (
    <div className="header-text">
      <header className=" text-3xl sm:text-4xl md:text-5xl font-bold text-center">
        <h1 className="text-5xl font-bold text-slate-700">
          MoodCard Generator
        </h1>
        <p className="py-7 font-semibold mt-2 text-base sm:text-lg md:text-xl text-center">
          What is your mood today?
        </p>
      </header>
    </div>
  );
}

export default Header;
