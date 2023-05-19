import React from "react";

const BookingTable = ({ booking,handleDelete, handleConfirm }) => {
  const { _id, img, customerName, date, service, price,status } = booking;

  

  return (
    <tr>
      <th>
        <button onClick={()=>handleDelete(_id)}    className="btn btn-circle btn-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className=" w-24 rounded ">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className="font-bold">{customerName}</div>
      </td>
      <td>{service}</td>
      <td>{date}</td>
      <td>{price}</td>
      <th>
        {
            status === 'confirm'
            ?
            <span className="text-xl font-bold text-green-600">Confirmed</span>
            :
            <button   onClick={()=>handleConfirm(_id)}  className="btn btn-orange btn-xs">pending</button>

        }
      </th>
    </tr>
  );
};

export default BookingTable;
