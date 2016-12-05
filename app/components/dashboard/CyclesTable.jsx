import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

const CyclesTable = ({ cycles }) => (
  <div>
    <h2>All cyles</h2>
    <Table selectable={false}>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn style={{ width: '320px' }}>Name</TableHeaderColumn>
          <TableHeaderColumn>Location</TableHeaderColumn>
          <TableHeaderColumn>Number of Applicants</TableHeaderColumn>
          <TableHeaderColumn>Number Accepted</TableHeaderColumn>
          <TableHeaderColumn>Status</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cycles.map(cycle => (
          <TableRow key={cycle.id}>
            <TableRowColumn style={{ width: '320px' }}>
              <Link to={`/cycles/${cycle.id}`}>{cycle.name}</Link>
            </TableRowColumn>
            <TableRowColumn>{cycle.location}</TableRowColumn>
            <TableRowColumn>{cycle.candidates.length}</TableRowColumn>
            <TableRowColumn>{cycle.candidates.filter(c =>
              c.applications.find(a => !/rejected|active/i.test(a.status))
            ).length}</TableRowColumn>
            <TableRowColumn>{cycle.status}</TableRowColumn>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

CyclesTable.propTypes = {
  cycles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CyclesTable;
