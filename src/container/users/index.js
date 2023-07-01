import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import api from '../../services/api';
import DeleteIcon from '@mui/icons-material/Delete';
import { useHistory } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import { Alert, Stack, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { Main } from './style';

export default function BasicTable() {
  const [users, setUsers] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [deleteUser, setDeleteUser] = useState(null);

  const { push } = useHistory();

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    try {
      const { data } = await api.get('/');
      console.log(data);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  }

  function registerUser() {
    push('/Register');
  }

  function editUser(user) {
    push('/Edit', { user });
  }

  async function confirmDeleteUser(user) {
    setDeleteUser(user);
    setShowAlert(true);
  }

  async function deleteUserConfirmed() {
    try {
      await api.delete(`users/${deleteUser.id}`);
      setAlertMessage('Usuário excluído com sucesso');
      setShowAlert(false);
      setTimeout(() => {
        setAlertMessage('');
      }, 2000);
      loadUsers();
    } catch (error) {
      console.log(error);
    }
  }

  const closeDialog = () => {
    setShowAlert(false);
    setDeleteUser(null);
  };

  return (
    <Main>
      <Stack sx={{ width: '80%' }} spacing={2}>
        {showAlert && (
          <Dialog open={showAlert} onClose={closeDialog}>
            <DialogTitle>Confirmar exclusão</DialogTitle>
            <DialogContent>
              <p>Tem certeza que deseja excluir a conta?</p>
            </DialogContent>
            <DialogActions>
              <Button onClick={closeDialog}>Cancelar</Button>
              <Button onClick={deleteUserConfirmed} autoFocus>
                Excluir
              </Button>
            </DialogActions>
          </Dialog>
        )}
        {alertMessage && (
          <Alert style={{ width: '80%' }} severity="success">
            {alertMessage}
          </Alert>
        )}
      </Stack>
      <TableContainer style={{ width: '80%' }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead style={{ background: '#ffd108' }}>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold', fontSize: 20 }}>Nome</TableCell>
              <TableCell style={{ fontWeight: 'bold', fontSize: 20 }} align="right">Data</TableCell>
              <TableCell style={{ fontWeight: 'bold', fontSize: 20 }} align="right">Valor</TableCell>
              <TableCell style={{ fontWeight: 'bold', fontSize: 20 }} align="right">Cartão</TableCell>
              <TableCell style={{ fontWeight: 'bold', fontSize: 20 }} align="right">Localização</TableCell>
              <TableCell style={{ fontWeight: 'bold', fontSize: 20 }} align="right">
                <Fab style={{ marginRight: 35 }} color="primary" aria-label="add">
                  <Tooltip title="Adicionar">
                    <Button style={{ color: 'white' }} onClick={() => registerUser()}>
                      Add
                    </Button>
                  </Tooltip>
                </Fab>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }, background: '#f5f2ffa' }}
              >
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell align="right">{format(new Date(user.date), 'dd/MM/yyyy')}</TableCell>
                <TableCell align="right">{user.value}</TableCell>
                <TableCell align="right">{user.card}</TableCell>
                <TableCell align="right">{user.location}</TableCell>
                <TableCell align="right">
                  <Tooltip title="Delete">
                    <IconButton style={{ height: 70, width: 70, marginRight: 8 }}>
                      <DeleteIcon onClick={() => confirmDeleteUser(user)} />
                    </IconButton>
                  </Tooltip>
                  <Fab color="secondary" aria-label="edit">
                    <EditIcon align="right" onClick={() => editUser(user)} />
                  </Fab>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Main>
  );
}
