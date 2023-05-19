import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingTable from "./BookingTable";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/bookings?email=${user.email}`;

  const [bookings, setBookings] = useState([]);
  // const navigate = useNavigate()

  useEffect(() => {
    fetch(url,{
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('car-access-token')}`
        }
    })
      .then((res) => res.json())
      .then(data => setBookings(data)
        
        // {if(!data.error){

        // }
        // else{
        //   navigate('/')
        // }
      
      
        
        )
  }, [url]);

  const handleDelete = (_id) => {
    console.log(_id);

    const proceed = confirm("Are you want to proceed");

    if (proceed) {
      fetch(`http://localhost:5000/bookings/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          if (data.deletedCount > 0) {
            alert("Delete successful");
            const remaining = bookings.filter((cof) => cof._id !== _id);
            setBookings(remaining);
          }
        });
    }
  };


  const handleConfirm =(id)=>{
    fetch(`http://localhost:5000/bookings/${id}`, {
        method: "PATCH",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({status: 'Confirm'})
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if(data.modifiedCount >0){
           const remaining = bookings.filter(booking => booking._id !== id)
           const updated = bookings.find(booking => booking._id === id)
           updated.status = 'confirm'
           const newBookings = [updated, ...remaining]
           setBookings(newBookings)
          }
  })

  }








  return (
    <div>
      <h1 className="text-5xl">Your Bookigs : {bookings.length}</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Service Pic</th>
              <th>Customer Name</th>
              <th>Service</th>
              <th>Date of Bookings</th>
              <th>Price</th>
              <th>Active/Pending</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => {
              return (
                <BookingTable
                  key={booking._id}
                  booking={booking}
                  handleDelete={handleDelete}
                  handleConfirm = {handleConfirm}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default Bookings;
