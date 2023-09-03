import axios from 'axios';
import {toast} from 'react-hot-toast';

export const getPortofolioUser = (login) => async (dispatch) => {
  try {
    const portofolios = await axios.get(`https://zany-ruby-whale-veil.cyclic.app/portofolio/profile/${login}`);
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
    const portofolios = await axios.post(`https://zany-ruby-whale-veil.cyclic.app/portofolio/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    toast.success('Portofolio Created', {
      duration: 1500,
      position: 'top-center',
    });
    setTimeout(function () {
      window.location.reload();
    }, 2000);
    const result = portofolios.data.data;
    dispatch({type: 'CREATE_PORTOFOLIO', payload: result});
    window.location.reload();
  } catch (err) {
    console.log(err.message);
    toast.error('Create Portofolio Failed', {
      duration: 1500,
      position: 'top-center',
    });
  }
};

export const deletePortofolio = (id, setShow) => async (dispatch) => {
  try {
    const portofolios = await axios.delete(`https://zany-ruby-whale-veil.cyclic.app/portofolio/${id}`);
    const result = portofolios.data.data;
    setShow(false);
    toast.success('Portofolio Deleted', {
      duration: 1500,
      position: 'top-center',
    });
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
    axios.put(`https://zany-ruby-whale-veil.cyclic.app/portofolio/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    setShow(false);
    toast.success('Portofolio Updated', {
      duration: 1500,
      position: 'top-center',
    });
    setTimeout(function () {
      window.location.reload();
    }, 1000);
  } catch (err) {
    console.log(err.message);
    toast.error('Update Portofolio Failed', {
      duration: 1500,
      position: 'top-center',
    });
  }
};
