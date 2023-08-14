import "./App.css";
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
      {/* <TypoGraphy/> */}
      <PrimerCard1 />
    </>
  );
}

export default App;
