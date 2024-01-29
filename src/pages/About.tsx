import { NavLink } from "react-router-dom";

import { Send } from "@mui/icons-material";
import me from "../assets/images/me.jpg";

const About = () => {
  return (
    <div className="flex justify-center">
      <div className="container md:grid grid-cols-2">
        <div className="flex justify-end px-20">
          <div className="text-gray-700 dark:text-white ">
            <h1 className="text-4xl py-5">Hi there</h1>

            <p className="text-lg leading-7 py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae sunt nobis quibusdam minima nihil! Earum quo optio
              repellat iure fugiat! Minus ducimus vero nam! Nemo molestias
              repellat ab ipsam tempore ut laboriosam tenetur asperiores libero
              culpa eaque veritatis itaque labore, hic, repudiandae est adipisci
              maiores in veniam excepturi. Aspernatur totam, quibusdam natus
              impedit numquam molestias perspiciatis dolore, ab asperiores quas
              similique illum iste culpa vero perferendis facere facilis
              accusamus quis soluta eaque laboriosam! Beatae, nemo?
            </p>
            <p className="text-lg leading-7 py-5">
              Shortly after graduating from the University of California, Santa
              Barbara, I joined the engineering team at Upstatement where I work
              on a wide variety of interesting and meaningful projects on a
              daily basis.
            </p>

            <div>
              <NavLink
                to="../contact"
                className="text-l uppercase text-darkBlue font-bold hover:text-slate-300 transition-all duration-300 ease-in-out"
              >
                <Send /> Send Me A Message
              </NavLink>
            </div>
          </div>
        </div>
        <div className="py-10 px-10 ">
          <h1 className="pt-20 pb-10">About me</h1>
          <img src={me} className="rounded-md" alt="Me" />
        </div>
      </div>
    </div>
  );
};

export default About;
