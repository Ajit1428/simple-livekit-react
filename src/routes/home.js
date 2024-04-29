import { useState } from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="h-screen">
      <div className="flex h-full flex-col gap-4 items-center justify-center border-2">
        <span className="font-bold text-2xl">React Livekit</span>
        <input
          placeholder="Enter the room id"
          className="p-4 border-2 w-[20rem]"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Link to={`/room/${inputValue}`}>
          <button className="bg-blue-400 text-white p-4 rounded-lg w-[20rem]">
            Join
          </button>
        </Link>
      </div>
    </div>
  );
};
