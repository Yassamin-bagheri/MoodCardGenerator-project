function MoodButton({ mood, onSelect }) {
  return (
    <button
      className="px-5 py-2 sm:px-5 sm:py-3 text-sm sm:text-base font-semibold border-2
  border-purple-500/75 bg-slate-300 rounded-full delay-50 duration-200 ease-in-out
  transition-all hover:-translate-y-1 hover:scale-110 hover:bg-pink-800 hover:text-white
"
      onClick={() => onSelect(mood)}
    >
      {mood.emoji} {mood.name}
    </button>
  );
}

export default MoodButton;
