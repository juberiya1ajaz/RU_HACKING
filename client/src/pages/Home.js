import React from "react";
import HeroImg from "../assets/hero.svg";
import FeatImg from "../assets/feat.svg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="md:mx-28 mx-4 text-white pt-10 pb-12">
      <div className="md:grid md:grid-cols-2 items-center pt-10">
        <div className="">
          <h1 className="text-3xl md:text-6xl">Who we are</h1>
          <p className="text-xl py-4 tracking-wider text-justify">
            At some point in time we students do feel guilty about our fast fashion choices, many times since we are broke we opt for fast fashion. To solve this issue as well we developed a separate portal on ShareNcare where user can donate their fast fashion clothes to anyone be it a student or an employee. Even though these are small steps toward sustainability but every step matter.
          </p>

          <Link to="/browse">
            <button className="bg-secondary py-2 px-8 rounded-md text-xl md:text-2xl">
              Browse
            </button>
          </Link>
        </div>
        <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
          <img src={HeroImg} alt="img" width="500" height="500" />
        </div>
      </div>

      <div className="md:grid md:grid-cols-2 pt-12 items-center">
        <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
          <img src={FeatImg} alt="img" width="400" height="400" />
        </div>
        <div className="">
          <h1 className="text-3xl md:text-5xl">What else do we have</h1>
          <p className="text-xl md:text-2xl py-4 tracking-wider">
            ShareNcare is a web app where you can:
          </p>
          <ul className="text-xl">
            <li className="list-disc">Exchange items with others.</li>
            <li className="list-disc">Users can donate their fast fashion clothes effectively.</li>
            <li className="list-disc">Students can sell their things with a fellow nearby lodger.</li>
            <li className="list-disc">Students can exchange their books, notes, and electronics by uploading their requirements.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
