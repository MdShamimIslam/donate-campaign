import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonateApplication } from "../../utility/localstorage";
import DonateCategory from "../DonateCategory/DonateCategory";

const Donation = () => {
  const categories = useLoaderData();
  const [donateCategories, setDonateCategories] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    const storedDonateIds = getStoredDonateApplication();
    if (categories.length > 0) {
      const donateApplications = categories.filter((category) =>
        storedDonateIds.includes(category.id)
      );
      setDonateCategories(donateApplications);
    } 
  }, []);

  return (
    <div className="my-8">
      {!donateCategories.length ? (
        <p className="text-4xl flex justify-center items-center mt-56 text-purple-700">No Data added</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {donateCategories.slice(0, dataLength).map((category) => (
              <DonateCategory
                key={category.id}
                category={category}
              ></DonateCategory>
            ))}
          </div>
          <div>
            {donateCategories.length >= 4 && (
              <div
                className={
                  dataLength === donateCategories.length
                    ? "hidden"
                    : "text-center mt-4 mb-16"
                }
              >
                <button
                  onClick={() => setDataLength(donateCategories.length)}
                  className="btn btn-warning"
                >
                  See All
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
