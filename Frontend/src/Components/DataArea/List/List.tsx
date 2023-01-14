import { useEffect, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Tooltip } from '@mui/material';
import DevGroupModel from '../../../Models/DevGroupModel';
import appointmentsService from '../../../Services/AppointmentsService';
import AppointmentModel from '../../../Models/AppointmentModel';
import Card from '../Card/Card';

import './List.css';
import { Apps, TableChart } from '@mui/icons-material';

const List: React.FC = (): JSX.Element => {
  const [devGroups, setDevGroups] = useState<DevGroupModel[]>([]);
  const [appointments, setAppointments] = useState<AppointmentModel[]>([]);
  const [devGroup, setDevGroup] = useState('');
  const [viewMode, setViewMode] = useState<'table' | 'grid'>('table');

  useEffect(() => {
    appointmentsService.getAllDevGroups()
      .then(devGroup => setDevGroups(devGroup))
      .catch(err => alert(err.message))
  }, []);

  const showAppointments = (e: SelectChangeEvent) => {
    const value = e.target.value;
    setDevGroup(value);
    appointmentsService.getAppointmentsByDevGroup(+value)
      .then(appointments => setAppointments(appointments))
      .catch(err => alert(err.message));
  };

  return (
    <div className="List">
      {
        viewMode === 'table' ?
          <Tooltip title={'Change to grid mode'}>
            <Apps className='Mode' onClick={() => setViewMode('grid')} />
          </Tooltip> :
          <Tooltip title={'Change to table mode'}>
            <TableChart className='Mode' onClick={() => setViewMode('table')} />
          </Tooltip>
      }
      <FormControl sx={{ m: 1, minWidth: 260 }}>
        <InputLabel id="devGroup-label" className="SelectBox">Select Development Group</InputLabel>
        <Select
          labelId="devGroup-label"
          label="Select Development Group"
          className="SelectBox"
          onChange={showAppointments}
          value={devGroup}
        >
          {
            devGroups.map(d =>
              <MenuItem key={d.devGroupId} value={d.devGroupId}>
                {d.devGroupName}
              </MenuItem>
            )
          }
        </Select>
      </FormControl>

      <div>
        {
          appointments.length > 0 ?
            viewMode === 'table' ?
              <table>
                <thead>
                  <tr>
                    <th>Development Group</th>
                    <th>Start</th>
                    <th>End</th>
                    <th>Duration (minutes)</th>
                    <th>Description</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    appointments.map(a => {
                      return (
                        <tr>
                          <td>{a.devGroupName}</td>
                          <td>{new Date(a.start).toLocaleString()}</td>
                          <td>{new Date(a.end).toLocaleString()}</td>
                          <td>{a.duration}</td>
                          <td>{a.description}</td>
                          <td>{a.room}</td>
                        </tr>
                      );
                    })
                  }
                </tbody>
              </table> :
              appointments.map(a => <Card key={a.appointmentId} appointment={a} />) :
            devGroup && <h2>No Items Found</h2>
        }
      </div>
    </div >
  );
};

export default List;
