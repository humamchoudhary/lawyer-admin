import React from 'react';

const AdminDashboard = () => {
  console.log("asd")
  return (
    <div className=" text-white min-h-screen ">
      <div className="  py-12">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <div className="flex flex-row flex-wrap gap-4">
          <div className="bg-prim-light min-w-96 p-6  flex flex-col rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">All Judgments</h2>
            <p className="text-4xl font-bold">6328</p>
            <a className="mt-2 hover:cursor-pointer" href='/admin/judgments'>See All</a>
          </div>
          <div className="bg-prim-light min-w-96 p-6  flex flex-col rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Signup Requests</h2>
            <p>Requests pending: 13</p>
            <p>Requests approved: 56</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
