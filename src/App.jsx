import React, { useState } from 'react';
import CreateForm from './CreateForm.jsx';
import Table from './Table.jsx';

function App() {
  const [tableData, setTableData] = useState([]);

  const handleSubmit = async (formData) => {
    try {
      const response = await fetch(
        "https://webhook.site/4262e861-5827-4d49-bba6-3d8952fb2c0f,formData", {

        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          {
            branchId: "string",
            branchName: "string",
            firmId: "string",
            firmName: "string",
            serviceCategory: "string",
            serviceName: formData.serviceName,
            serviceNo: formData.servicenumber,
            status: formData.status,
          },
        ]),
      });

      const responseData = await response.json();
      console.log("Response:", responseData);
      setTableData([...tableData, formData]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="App">
      <h1>Service Form</h1>
      <CreateForm onSubmit={handleSubmit} />
      <h2>Submitted Data</h2>
      <Table data={tableData} />
    </div>
  );
}

export default App;
