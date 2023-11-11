import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Cell } from "recharts";
import { getStoredDonateApplication } from "../../utility/localstorage";

const Statistics = () => {
  const categories = useLoaderData()
  const [donateCategories, setDonateCategories] = useState([]);

  useEffect(() => {
    const storedDonateIds = getStoredDonateApplication();
    if (categories.length > 0) {
      const donateApplications = categories.filter((category) =>
        storedDonateIds.includes(category.id)
      );
      setDonateCategories(donateApplications);
    } 
  }, []);

  const totalDonatePrice = categories.reduce((sum,category)=> category.price + sum, 0);
  const donateCategoriesPrice = donateCategories.reduce((sum,category)=> category.price + sum, 0);
  const duePrice = totalDonatePrice - donateCategoriesPrice;
  console.log(typeof donateCategoriesPrice, typeof duePrice);

  

  const data = [
    { name: "Group A", value: duePrice },
    { name: "Group B", value:  donateCategoriesPrice}
  ];
  const COLORS = ["#0088FE", "#00C49F"];
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className="text-center">
      <div className="flex justify-center">
      <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
      </div>
      <div className="flex justify-center -mt-16 mb-6">
      <div>
      <h2 className="text-lg">Total Donation</h2>
      <div className="bg-[#0088FE] w-[150px] p-1"></div>
      <h2 className=" mt-4 text-lg">Your Donation</h2>
      <div className="bg-[#00C49F] w-[150px] p-1"></div>
      </div>
      </div>
    </div>
  );
};

export default Statistics;
