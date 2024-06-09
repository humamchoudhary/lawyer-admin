import React from 'react';
import { useHistory } from 'react-router-dom';

const ReviewRequests = () => {
  const history = useHistory();

  const reviewRequests = [
    { id: 1, name: 'John Doe', status: 'pending' },
    { id: 2, name: 'Jane Smith', status: 'pending' },
    // Add more review requests as needed
  ];

  const handleNameClick = (id) => {
    history.push(`/profile/${id}`);
  };

  const handleApprove = (id) => {
    // Call the function to approve the review request
    console.log(`Approve request for ID: ${id}`);
  };

  const handleReject = (id) => {
    // Call the function to reject the review request
    console.log(`Reject request for ID: ${id}`);
  };

  return (
    <div className=" text-white min-h-screen p-6">
      <div className="max-w-7xl mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6">Review Requests</h1>
        <table className="w-full bg-prim-light text-white">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviewRequests.map((request) => (
              <tr key={request.id}>
                <td
                  className="px-4 py-2 cursor-pointer  hover:underline"
                  // onClick={() => handleNameClick(request.id)}
                >
                  <a href={`/profile/${request.id}`}>
                    {request.name}</a>
                </td>
                <td className="px-4 py-2">
                  <button
                    className="bg-green-600 px-4 py-2 rounded mr-2 hover:bg-green-700"
                    onClick={() => handleApprove(request.id)}
                  >
                    Approve
                  </button>
                  <button
                    className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
                    onClick={() => handleReject(request.id)}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReviewRequests;
