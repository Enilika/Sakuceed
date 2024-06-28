import "./App.css";
import HiraganaToRomajiConverter from "./HiraganaRomajiConverter";

function App() {
  return (
    <>
      <div className="flex justify-center items-center gap-1">
        <h1
          className="mb-8 text-5xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white"
          id="title"
        >
          Sakuceed
        </h1>
        <img src="./sakuceed.png" alt="titleIcon" className="h-24 w-11"></img>
      </div>
      <HiraganaToRomajiConverter />
      <footer className="bg-white rounded-lg shadow dark:bg-gray-800 m-4">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          Toriaezu Nanika Kaitoku
        </span>
      </footer>
    </>
  );
}

export default App;
