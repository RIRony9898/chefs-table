const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-[600px] rounded-3xl"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/DGGyp1Z/cover-pic.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-4xl text-white">
            <h1 className="mb-5 text-5xl font-bold">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="mb-5">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ coding problems to become an
              exceptionally well world-class Programmer.
            </p>
            <div className='flex justify-center items-center gap-4'>
              <button className="btn bg-[#0BE58A] border-none text-black hover:bg-violet-500 hover:text-white">
                Explore Now
              </button>
              <button className="btn btn-primary bg-transparent text-white border-white">
                Our Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
