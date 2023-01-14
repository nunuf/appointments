import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button, ButtonGroup, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Clear, Close, Send } from '@mui/icons-material';
import AppointmentModel from '../../../Models/AppointmentModel';
import DevGroupModel from '../../../Models/DevGroupModel';
import appointmentsService from '../../../Services/AppointmentsService';

import './Add.css';

const Add: React.FC = (): JSX.Element => {
  const { handleSubmit, register } = useForm<AppointmentModel>();
  const [devGroups, setDevGroups] = useState<DevGroupModel[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    appointmentsService.getAllDevGroups()
    .then(devGroups => setDevGroups(devGroups))
    .catch(err => alert(err.message));
  }, []);

  const send = async (appointment: AppointmentModel) => {
    try {
      await appointmentsService.addAppointment(appointment);
      alert('Appointment successfully added');
      navigate('/appointments');
    } catch (err: any) {
      alert(err.message)
    }
  };

  return (
    <div className="Add Box">
      <div className='Title'>New Appointment</div>
      <NavLink to="/appointments" className="Close"><Close /></NavLink>
      <form onSubmit={handleSubmit(send)}>
        <FormControl fullWidth>
          <InputLabel id="devGroupAdd-label" className="SelectBox">Select Development Group</InputLabel>
          <Select
            labelId="devGroupAdd-label"
            label="Select Development Group"
            className="SelectBox"
            {...register('devGroupId')}
            defaultValue=''
            required
          >
            {
              devGroups.map(d =>
                <MenuItem key={'Add'+d.devGroupId} value={d.devGroupId}>
                  {d.devGroupName}
                </MenuItem>
              )
            }
          </Select>
        </FormControl>

        <TextField
          required
          type="datetime-local"
          variant="outlined"
          fullWidth
          label="Start"
          className="TextBox"
          {...register('start')}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          required
          type="datetime-local"
          variant="outlined"
          fullWidth
          label="End"
          className="TextBox"
          {...register('end')}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          required
          multiline
          maxRows={3}
          type="text"
          variant="outlined"
          fullWidth
          label="Description"
          className="TextBox"
          {...register('description')}
          InputProps={{ inputProps: { minLength: 2, maxLength: 500 } }}
        />
        <TextField
          required
          variant="outlined"
          type="text"
          fullWidth
          label="Room"
          className="TextBox"
          {...register('room')}
          InputProps={{ inputProps: { minLength: 2, maxLength: 40 } }}
        />

        <ButtonGroup variant="contained" fullWidth>
          <Button color="primary" type="submit" startIcon={<Send />}>Add</Button>
          <Button color="secondary" type="reset" startIcon={<Clear />}>Clear</Button>
        </ButtonGroup>
      </form>
    </div>
  );
};

export default Add;
