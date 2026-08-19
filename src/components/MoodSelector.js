import MoodButton from "./MoodButton";

function MoodSelector({ moods, onSelect }) {
  return (
    <div className="mood-selector flex-wrap">
      {moods.map((mood) => (
        <MoodButton key={mood.id} mood={mood} onSelect={onSelect} />
      ))}
    </div>
  );
}

export default MoodSelector;
