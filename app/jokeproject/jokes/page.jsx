"use client";
import { useEffect, useState } from "react";
import LoadingAnimation from "@/app/(users)/LoadingAnimation";

export default function Page() {
  const [randomJokes, setRandomJokes] = useState({});
  const [showPunchline, setShowPunchline] = useState(false);
  const [loading, setLoading] = useState(true); 

  const fetchRandomJoke = async () => {
    try {
      setLoading(true); 
      const URL = "https://official-joke-api.appspot.com/random_joke";
      const res = await fetch(URL);
      const data = await res.json();
      setRandomJokes(data);
      setShowPunchline(false);
    } catch (error) {
      console.error("Error fetching joke:", error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchRandomJoke(); 
  }, []);

  return (
    <div className="flex items-center justify-center bg-black h-screen w-screen">
      <div className="bg-white shadow rounded-lg p-6 max-w-md w-full text-center">
        {loading ? (
          <LoadingAnimation />
        ) : (
          <>
            <h2 className="text-xl font-bold mb-4">Random Joke</h2>

            <p className="text-gray-700 font-medium mb-3">{randomJokes.setup}</p>

            {!showPunchline ? (
              <button
                onClick={() => setShowPunchline(true)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              >
                Reveal Punchline
              </button>
            ) : (
              <div>
                <p className="text-gray-900 font-semibold mb-3">
                  {randomJokes.punchline}
                </p>
                <div className="flex justify-center gap-2">
                  <button
                    onClick={() => setShowPunchline(false)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
                  >
                    Hide
                  </button>
                  <button
                    onClick={fetchRandomJoke}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                  >
                    Next Joke
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
