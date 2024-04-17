import React, { useEffect, useState } from "react";
import ApiServices from "../services/Apiservices";

export default function Category() {
  const [data, setData] = useState();
  async function getData() {
    try {
      const res = await ApiServices.getLstCategory();
      setData(res);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">
            Category
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-3">
            {data &&
              data?.map((item, index) => (
                <div key={index}>
                  <a
                    href="#"
                    className="group relative flex md:h-[550px] h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
                  >
                    <img
                      src={item.categoryImage}
                      loading="lazy"
                      alt="Photo by Austin Wade"
                      className="absolute inset-0 h-full w-full  object-fill transition duration-200 group-hover:scale-125"
                    />
                    <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                      <span className="text-gray-500">
                        {item.categoryTitle}
                      </span>
                      <span className="text-lg font-bold text-gray-800 lg:text-xl">
                        {item.categoryTitle}
                      </span>
                    </div>
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
