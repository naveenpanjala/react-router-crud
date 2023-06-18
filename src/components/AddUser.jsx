import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const userId = params.userId;
  const [errors, setErrors] = useState([]);
  const [updateError, setupdateError] = useState("");
  const [fetchError, setfetchError] = useState("");
  const [saveError, setsaveError] = useState("");


  useEffect(() => {
    if (userId) {
      fetchData(userId);
    }
  }, [userId]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "gender") {
      setGender(value);
    } else if (name === "status") {
      setStatus(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const user = {
      name: name,
      email: email,
      gender: gender,
      status: status,
    };
    if (userId) {
      updatedData(userId, user);
    } else {
      addData(user);
    }
    navigate(-1);
  };

  const updatedData = (id, user) => {
    const url = `https://gorest.co.in/public/v2/users/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        Authorization:
          "Bearer 0f7f63fc3e5c46a17aee89dcc3e8739bb022f16000616a9d6e657c350aa75c1a",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        window.alert("Updated Successfully", response.status);
      })
      .catch((error) => {
        setupdateError(error);
      });
  };




  const addData = (data) => {
    fetch(`https://gorest.co.in/public/v2/users`, {
      method: "POST",
      headers: {
        Authorization:
          "Bearer 0f7f63fc3e5c46a17aee89dcc3e8739bb022f16000616a9d6e657c350aa75c1a",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        window.alert("Data added Successfully", response.status);
      })
      .catch((error) => {
        setsaveError(error);
      });
  };

  const fetchData = (id) => {
    fetch(`https://gorest.co.in/public/v2/users/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer 0f7f63fc3e5c46a17aee89dcc3e8739bb022f16000616a9d6e657c350aa75c1a`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Server responds with error!");
        }
        return response.json();
      })
      .then((json) => {
        setName(json.name);
        setEmail(json.email);
        setGender(json.gender);
        setStatus(json.status);
      })
      .catch((error) => {
        setfetchError(error);
      });
  };

  const validateForm = () => {
    const validationErrors = {};

    if (name.trim() === "") {
      validationErrors.name = "Name is required";
    }

    if (email.trim() === "") {
      validationErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      validationErrors.email = "Invalid email";
    }

    if (gender === "") {
      validationErrors.gender = "Gender is required";
    }

    if (status === "") {
      validationErrors.status = "Status is required";
    }

    return validationErrors;
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="container">
      <h2>{fetchError}</h2>
      <h2>{saveError}</h2>
      <h2>{updateError}</h2>
      <form onSubmit={handleSubmit}>
        <div className="text-center">
          <h2>
            <b>Add User Page</b>
          </h2>
          <br />
          {errors.name && (
            <span className="error" style={{ color: "red" }}>
              {errors.name}
            </span>
          )}
          <br />
          <label className="form-label">
            <b>NAME: </b>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>
          <br />
          {errors.email && (
            <span className="error" style={{ color: "red" }}>
              {errors.email}
            </span>
          )}
          <br />
          <label className="form-label">
            <b>EMAIL: </b>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            {/* email */}
            <br />
          </label>
          <br />
          {errors.gender && (
            <span className="error" style={{ color: "red" }}>
              {errors.gender}
            </span>
          )}
          <br />
          <label className="form-label">
            <b> GENDER: </b>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={handleChange}
            />
            <b>Male</b>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={handleChange}
            />
            <b>Female</b>
          </label>
          <br />
          {errors.status && (
            <span className="error" style={{ color: "red" }}>
              {errors.status}
            </span>
          )}
          <br />
          <label className="form-label">
            <b>STATUS: </b>
            <select name="status" value={status} onChange={handleChange}>
              <option value="">Select</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </label>
          <br />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddUser;
