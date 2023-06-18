import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserListing = () => {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(`https://gorest.co.in/public/v2/users`, {
      method: "GET",
      headers: {
        Authorization: `Bearer 0f7f63fc3e5c46a17aee89dcc3e8739bb022f16000616a9d6e657c350aa75c1a`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status >= 400) {
        }

        return response.json();
      })
      .then((json) => {
        setUserData(json);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEdit = (userId) => {
    navigate(`/add-user/${userId}`);
  };

  const handleDelete = (id) => {
    let del = window.confirm("Are You Sure?");
    if (del === true) {
      fetch(`https://gorest.co.in/public/v2/users/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer 0f7f63fc3e5c46a17aee89dcc3e8739bb022f16000616a9d6e657c350aa75c1a",
        },
      })
        .then(() => {
          const updatedData = userData.filter((user) => user.id !== id);
          setUserData(updatedData);
        })
        .catch((error) => { });
    }
  };

  return (
    <div className="container">
      <h2 >
        <b>User Listing Page</b>
      </h2>
      <button
        className="btn btn-primary "
        onClick={() => navigate(`/add-user`)}
      >
        AddUser
      </button>

      <table className="table table-light table-striped">
        <thead className="table-active">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {userData?.map((user, i) => (
            <tr key={i}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.status}</td>
              <td>
                <button
                  onClick={() => handleEdit(user.id)}
                  className="btn btn-warning"
                >
                  Edit
                </button>{" "}
                &nbsp;
                <button
                  onClick={() => handleDelete(user.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserListing;
