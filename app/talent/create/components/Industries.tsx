"use client";

import React from "react";


interface IndustriesProps { }

const Industries: React.FC<IndustriesProps> = ({ }) => {

    const industries = [
        "IT",
        "Finance",
        "Healthcare",
        "Education",
        "Marketing",
        "Sales",
        "Engineering",
        "Retail",
        "Human Resources",
        "Manufacturing",
        "Legal",
        "Construction",
        "Hospitality",
        "Media",
        "Agriculture",
        "Transportation",
        "Non-profit",
        "Other",
    ];

    return (
        <>
            <h2 className="font-bold text-3xl mb-4 text-[#FF7E33]">Industries</h2>
            <p className="font-medium text-xl mb-6">Select the industries that align best with your interests, knowledge, experience, and wishes. </p>
            <div className="flex flex-wrap gap-4 max-h-[200px] overflow-y-auto">
                {
                    industries.map((industry, index) => (
                        <div className="flex" key={index}>
                            <input type="checkbox" id={industry} className="peer hidden" />
                            <label htmlFor={industry} className="select-none cursor-pointer rounded-lg border-2 border-gray-200
   py-3 px-6 font-bold text-[#FF7E33] transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 peer-checked:border-gray-200 "> {industry} </label>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default Industries;
