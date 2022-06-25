import React from "react";

const Card = ({ item }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 mx-8 my-12">

      {item.map((Val) => {
        return (
          <article className="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200" key={Val.id}>
            <div className="relative w-full h-80 md:h-64 lg:h-44">
              <img src={Val.img} alt="" className="w-full h-full object-center object-cover" />
            </div>
            <div className="px-3 py-4">
              <h1 className="pb-2 font-semibold text-xl">{Val.title}</h1>
              <h3 className="text-sm text-gray-500 pb-2">
                <a className="bg-indigo-600 py-1 px-2 text-white rounded-lg">
                  <span className="absolute inset-0"></span>
                  {Val.category}
                </a>
              </h3>
              <h1 className="py-2 text-xl">{Val.user}</h1>
              <p className="text-base font-semibold text-gray-900 pb-2">
                {Val.desc}</p>
              <button className="bg-secondary text-white text-lg py-2 px-4 rounded-xl">Exchange</button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Card;
