function MoodButton({ mood, onSelect }) {
  return (
    <div className="flex p-2
  flex-wrap
  justify-center md:inline-flex
  gap-3
  sm:gap-4">
    <button
      className=" font-semibold border-2 border-purple-500/75 bg-slate-300 rounded-full
         delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-pink-800
          hover:text-white sm:px-5 sm:py-3 text-sm sm:text-base transition-all"
      onClick={() => onSelect(mood)}
    >
      {mood.emoji} {mood.name}
    </button>
    </div>
  );
}

export default MoodButton;
