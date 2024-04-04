import React from 'react';

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Service Number</th>
          <th>Service Name</th>
          <th>Service Capacity</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.servicenumber}</td>
            <td>{item.serviceName}</td>
            <td>{item.serviceCapacity}</td>
            <td>{item.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;