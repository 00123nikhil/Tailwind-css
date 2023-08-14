import "./App.css";
import Card1 from "./Components/Card1";
import PrimerCard1 from "./Components/PrimerCard1";
import TypoGraphy from "./Components/TypoGraphy";

function App() {
  return (
    <>
      <div className="flex bg-black mb-5">
        <h1 className=" text-white p-4 font-semibold text-3xl ">
          Tailwind CSS React
        </h1>
      </div>

      {/* Components */}
      <div className="mt-10 flex flex-col">
        <div>
          <PrimerCard1 />
        </div>
        <div>
          <Card1 />
        </div>
      </div>
    </>
  );
}

export default App;
