function MoodCard({ mood }) {
  if (!mood) {
    return (
      <div className="empty-card">
        <p className="my-8 text-xl p-2 font-semibold outline-stone-800 outline-double">
          Choose one state please🌸
        </p>
      </div>
    );
  }

  return (
    <div
      className="mood-card min-h-48 my-8 text-center 
      border-2 border-slate-400 shadow-2xl w-full max-w-sm mx-auto rounded-3xl p-6 sm:p-8
      transform ease-out animate-cardAppear transition-all duration-300 hover:scale-105
      hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
      style={{ backgroundColor: mood.color }}
    >
      <div className="mood-emoji text-4xl animate-bounce">{mood.emoji}</div>
      <h3 className="font-bold text-xl py-2 text-blue-700">{mood.name}</h3>
      <p className="text-lg font-semibold outline-black">{mood.message}</p>
    </div>
  );
}

export default MoodCard;
