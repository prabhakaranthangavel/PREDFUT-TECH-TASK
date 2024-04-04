import React, { useState } from 'react';

const CreateForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      servicenumber: "",
      serviceName: "",
      serviceCapacity: "",
      status: "",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="row">

          <div className="col-md-6 mb-3">
            <label>ServiceName</label>
            <input
              type="text"
              className="form-control"
              placeholder="Welding-Non-CT Service"
              name="servicename"
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label>Service Capacity</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Service Capacity"
              name="servicecapacity"
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label>Select Firm</label>
            <select
              className="form-select"
              placeholder="Select Service Firm"
              name="servicefirm"
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="mobileapp">Mobile App Development</option>
              <option value="softwaredev">Software Development</option>
              <option value="digitalmarket">Digital Marketing Agencies</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label>Select Branch</label>
            <select
              className="form-select"
              placeholder="Select Service Branch"
              name="servicebranch"
              onChange={handleChange}
            >
              <option value="">Select</option>l
              <option vaue="erode">Erode</option>l
              <option value="chennai">Chennai</option>
              <option value="covai">CBE</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label>EB Service No</label>
            <input
              type="string"
              className="form-control"
              name="ebservicenumber"
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label>Created By</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Creator Name"
              name="creatorname"
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label>Status</label>
            <select
              className="form-select"
              name="status"
              onChange={handleChange}
            >
              <option vaue="completed">Completed</option>
              <option value="pending">Pending</option>
            </select>   
          </div>
        </div><br/><br/>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default CreateForm;