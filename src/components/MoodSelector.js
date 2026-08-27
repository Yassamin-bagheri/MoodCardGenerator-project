import MoodButton from "./MoodButton";

function MoodSelector({ moods, onSelect }) {
  return (
<div className="mood-selector grid grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-4">      {moods.map((mood) => (
        <MoodButton key={mood.id} mood={mood} onSelect={onSelect} />
      ))}
    </div>
  );
}

export default MoodSelector;
