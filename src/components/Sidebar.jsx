import React from 'react';

import "../scoped-tailwind.css";
const Sidebar = () => {
  return (
    <div className="bg-prim-light text-white w-64 h-screen px-4 pt-8 pb-4 scoped-tailwind">
      <div className="flex flex-col items-center">
        <div className="text-2xl font-bold mb-8">LEGAL-INSIGHT</div>
        <ul className="w-full">
          <li className="mb-4">
            <a href="/admin/dashboard" className="flex items-center space-x-4 p-2 hover:bg-prim duration-150 rounded">
              <span>Dashboard</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="/admin/judgments" className="flex items-center space-x-4 p-2 hover:bg-prim duration-150 rounded">
              <span>All Judgments</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="/admin/add-judgment" className="flex items-center space-x-4 p-2 hover:bg-prim duration-150 rounded">
              <span>Add Judgment</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="/admin/delete-judgment" className="flex items-center space-x-4 p-2 hover:bg-prim duration-150 rounded">
              <span>Delete Judgment</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="/admin/edit-judgment" className="flex items-center space-x-4 p-2 hover:bg-prim duration-150 rounded">
              <span>Edit Judgment</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="/admin/review-requests" className="flex items-center space-x-4 p-2 hover:bg-prim duration-150 rounded">
              <span>Review Requests</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
