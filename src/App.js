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
    <div
      className="App flex min-h-screen w-full flex-col items-center justify-center 
    px-4 py-12 text-center font-sans sm:px-6 sm:py-16 md:px-8 md:py-20"
    >
      <Header />

      <MoodSelector moods={moods} onSelect={handleSelectMood} />

      <MoodCard mood={selectedMood} />
    </div>
  );
}

export default App;
