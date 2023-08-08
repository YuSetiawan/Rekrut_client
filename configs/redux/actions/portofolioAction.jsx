import axios from 'axios';
import Swal from 'sweetalert2';

export const getPortofolioUser = (login) => async (dispatch) => {
  try {
    const portofolios = await axios.get(`http://localhost:4000/portofolio/profile/${login}`);
    const result = portofolios.data.data;
    dispatch({type: 'GET_ALL_PORTOFOLIO_USER', payload: result});
  } catch (err) {
    console.error(err.message);
  }
};

export const createPortofolio = (portoAction, photo) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append('id_users', portoAction.id_users);
    formData.append('name', portoAction.name);
    formData.append('repository', portoAction.repository);
    if (photo) {
      formData.append('photo', photo);
    }
    const portofolios = await axios.post(`http://localhost:4000/portofolio/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    Swal.fire({
      icon: 'success',
      title: 'Create Portofolio Success',
    });
    setTimeout(function () {
      window.location.reload();
    }, 2000);
    const result = portofolios.data.data;
    dispatch({type: 'CREATE_PORTOFOLIO', payload: result});
    window.location.reload();
  } catch (err) {
    console.log(err.message);
    Swal.fire({
      icon: 'error',
      title: 'Create Portofolio failed',
    });
  }
};

export const deletePortofolio = (id, setShow) => async (dispatch) => {
  try {
    const portofolios = await axios.delete(`http://localhost:4000/portofolio/${id}`);
    const result = portofolios.data.data;
    setShow(false);
    dispatch({type: 'DELETE_PORTOFOLIO', payload: result});
    window.location.reload();
  } catch (err) {
    console.log(err.message);
  }
};

export const updatePortofolio = (id, portoAction, photo, setShow) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append('name', portoAction.name);
    formData.append('repository', portoAction.repository);
    if (photo) {
      formData.append('photo', photo);
    }
    axios.put(`http://localhost:4000/portofolio/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    setShow(false);
    Swal.fire({
      icon: 'success',
      title: 'Edit Portofolio Success',
    });
    setTimeout(function () {
      window.location.reload();
    }, 1000);
  } catch (err) {
    console.log(err.message);
    Swal.fire({
      icon: 'error',
      title: 'Edit Portofolio failed',
    });
  }
};
