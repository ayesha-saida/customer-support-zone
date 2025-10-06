import React from 'react';
import { Calendar } from 'lucide-react';

const Complain = ({ ticketIssue, handleComplain }) => {
  const customerIssue = ticketIssue;
  //console.log(customerIssue);
  const getPriorityClasses = priority => {
    switch (priority) {
      case 'High':
        return 'text-red-500 ';
      case 'Medium':
        return 'text-yellow-500 ';
      default:
        return 'text-green-500';
    }
  };
  const getStatusClasses = status => {
    switch (status) {
      case 'In-Progress':
        return 'bg-yellow-200 text-gray-500';
      case 'Open':
        return 'text-green-500 bg-green-100 ';
      default:
        return 'text-black bg-gray-100';
    }
  };

  return (
    <div>
      <div
        onClick={() => handleComplain(ticketIssue)}
        className="bg-white p-4 rounded-md space-y-2"
      >
        <div className="flex justify-between">
          <h2 className="text-lg">{customerIssue.title}</h2>
          <button
            className={`rounded-lg px-2 py-1 ${getStatusClasses(
              customerIssue.status
            )}`}
          >
            {customerIssue.status}
          </button>
        </div>
        <p className="text-gray-500">{customerIssue.description}</p>
        <div className="flex lg:justify-between lg:flex-row flex-col lg:space-y-0 space-y-2">
          <div className="flex">
            <p className="lg:px-2 px-0">{customerIssue.id}</p>

            <p
              className={`px-2  rounded ${getPriorityClasses(
                customerIssue.priority
              )}`}
            >
              {customerIssue.priority}
            </p>
          </div>

          <div className="flex">
            <p className="px-3">{customerIssue.customer}</p>
            <span className="flex">
              <Calendar size={18} className="text-gray-500" />
              <span className="px-2">{customerIssue.createdAt}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complain;
