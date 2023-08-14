function PrimerCard1() {
  return (
    <div className="flex items-center justify-center">
      <div className=" flex flex-col items-center justify-center rounded-lg  p-8 bg-w bg-blue-600">
        {/* Image or icon */}
        <div className="flex items-center justify-center  ">
          <img
            className="h-[50px] "
            src="https://img.freepik.com/free-photo/close-up-fast-food-still-life_23-2149281337.jpg?w=1060&t=st=1692010804~exp=1692011404~hmac=3d1cc03028dd0abcf8c7cdf5c7f3e6b4099349b7768d39db53ac0e0460429102"
            alt=""
          />
        </div>

        <div>
          <h1 className=" font-bold text-2xl mt-5">
            Welcome to Tailwindtemplates
          </h1>
        </div>

        {/* paragraph */}
        <p className="text-center mt-5 ">
          A repository of free components built with tailwindcss. Every
          component is responsive, customizable and carefully crafted for your
          use.
        </p>

        {/* button */}
        <button className="bg-green-500 px-5 py-3 mt-5 font-medium hover:bg-green-700 rounded text-lg">
          Get Started
        </button>

        <a href="#" className=" mt-5 font-bold">
          Learn More
        </a>
      </div>
    </div>
  );
}

export default PrimerCard1;
