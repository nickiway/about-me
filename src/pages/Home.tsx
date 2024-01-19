import authorImage from "../assets/images/author.png";

const Home = () => {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, dolorem. Quibusdam non optio beatae earum atque assumenda quos modi r epellat!"
      .substring(0)
      .concat("...");

  return (
    <main className="container">
      <div className="text-container">
        <div>
          <div>
            <p>Hello, I'm Nick</p>
            <p>Frontend Developer</p>
            <p>{text}</p>
          </div>
          <div>
            <a
              href={authorImage}
              download={"The CV Nick Shkitak"}
              target="_blank"
            >
              <button className="bg-lightBlue text-white">
                Download My CV
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="image-container">
        <div className="image">alt: Image</div>
      </div>
    </main>

    // <main className="bg-blue-100 flex-grow">
    //   <section className="md:grid md:grid-cols-2 px-28 h-full">
    //     <div className="flex items-center">
    //       <div>
    //         <p className="py-2">
    //           <span className="text-3xl">Hello, I'm Nick</span>
    //         </p>

    //         <p className="py-5">
    //           <span className="text-8xl">A Frontend Developer</span>
    //         </p>

    //         <p className="py-2">
    //           <span className="text-2xl">
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
    //             cupiditate.
    //           </span>
    //         </p>

    //         <div className="flex items-center py-5">
    //           <button className="bg-blue-500 text-white px-5 py-2 rounded-full">
    //             Download CV
    //           </button>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="flex items-center justify-center">
    //       {/* <div
    //         className="bg-auto bg-no-repeat bg-contain w-3/4 h-4/5"
    //         style={{ backgroundImage: `url(${authorImage})` }}
    //       ></div> */}
    //     </div>
    //   </section>
    // </main>
  );
};

export default Home;
