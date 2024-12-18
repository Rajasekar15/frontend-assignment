import React from 'react';

const Table = ({ projects }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Percentage Funded</th>
          <th>Amount Pledged</th>
        </tr>
      </thead>
      {projects ? 
      <tbody>
        {projects.map((project, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{project['percentage.funded']}</td>
            <td>${project['amt.pledged'].toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
: null}
    </table>
  );
};

export default Table;
