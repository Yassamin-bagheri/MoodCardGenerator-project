import { useState } from "react";

import Header from "./components/Header";
import MoodSelector from "./components/MoodSelector";
import MoodCard from "./components/MoodCard";

import { moods } from "./main/moods";

function App() {
  const [selectedMood, setSelectedMood] = useState(null);
  const handleSelectMood = (mood) => {
    setSelectedMood(mood);
  };

  return (
    <div className="transform ease-in-out animate-cardAppear transition-all duration-400
     App flex flex-col align font-sans items-center justify-center py-20 text-center min-h-screen px-4 sm:px-6 md:px-8">
      <Header />

      <MoodSelector moods={moods} onSelect={handleSelectMood} />

      <MoodCard mood={selectedMood} />
    </div>
  );
}

export default App;
