import React from "react";

const industries = [
  "Consulting",
  "Financial Services",
  "Market Research",
  "Construction",
  "Healthcare",
  "Telecommunication",
  "Recruitment and Staffing",
  "Manufacturing",
  "Information Technologies",
  "Logistics",
  "Media Production",
  "Advertising Services",
];

export default function IndustryServing() {
  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-8">Industry Serving</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {industry}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
