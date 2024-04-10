"use client";

import React from "react";


interface RolesProps { }

const Roles: React.FC<RolesProps> = ({ }) => {

    const roles = [
        "Software Engineer",
        "QA Engineer",
        "Product Manager",
        "Data Analyst",
        "Data Scientist",
        "Business Analyst",
        "Sales Manager",
        "Marketing Manager",
        "HR Manager",
        "Recruiter",
        "Customer Support",
        "Customer Success",
        "Account Manager",
        "Accountant",
        "Finance Manager",
        "Legal Counsel",
        "Lawyer",
        "Paralegal",
        "Nurse",
        "Doctor",
        "Pharmacist",
        "Teacher",
        "Professor",
        "Principal",
        "Dean",
    ];

    return (
        <>
            <h2 className="font-bold text-3xl mb-4 text-[#FF7E33]">Roles</h2>
            <p className="font-medium text-xl mb-6">Select the roles that align best with your interests, knowledge, experience, and wishes.</p>
            <div className="flex flex-wrap gap-4 max-h-[200px] overflow-y-auto">
                {
                    roles.map((role, index) => (
                        <div className="flex" key={index}>
                            <input type="checkbox" id={role} className="peer hidden" />
                            <label htmlFor={role} className="select-none cursor-pointer rounded-lg border-2 border-gray-200
   py-3 px-6 font-bold text-[#FF7E33] transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 peer-checked:border-gray-200 "> {role} </label>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default Roles;
