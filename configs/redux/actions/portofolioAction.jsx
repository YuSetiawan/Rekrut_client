import axios from 'axios';
import Swal from 'sweetalert2';

export const getPortofolioUser = (id) => async (dispatch) => {
  try {
    const portofolios = await axios.get(`https://zany-ruby-whale-veil.cyclic.app/portofolio/profile/${id}`);
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
    Swal.fire({
      title: 'Portofolio Created',
      showConfirmButton: false,
      icon: 'success',
      target: '#custom-target',
      timer: 2000,
      timerProgressBar: true,
      customClass: {
        container: 'position-absolute',
      },
      toast: true,
      position: 'bottom-right',
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
      title: 'Create Portofolio Failed',
      showConfirmButton: false,
      icon: 'error',
      target: '#custom-target',
      timer: 2000,
      timerProgressBar: true,
      customClass: {
        container: 'position-absolute',
      },
      toast: true,
      position: 'bottom-right',
    });
  }
};

export const deletePortofolio = (id, setShow) => async (dispatch) => {
  try {
    const portofolios = await axios.delete(`https://zany-ruby-whale-veil.cyclic.app/portofolio/${id}`);
    const result = portofolios.data.data;
    setShow(false);
    Swal.fire({
      title: 'Portofolio Deleted',
      showConfirmButton: false,
      icon: 'success',
      target: '#custom-target',
      timer: 2500,
      timerProgressBar: true,
      customClass: {
        container: 'position-absolute',
      },
      toast: true,
      position: 'bottom-right',
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
    Swal.fire({
      title: 'Portofolio Updated',
      showConfirmButton: false,
      icon: 'success',
      target: '#custom-target',
      timer: 2500,
      timerProgressBar: true,
      customClass: {
        container: 'position-absolute',
      },
      toast: true,
      position: 'bottom-right',
    });
    setTimeout(function () {
      window.location.reload();
    }, 1000);
  } catch (err) {
    console.log(err.message);
    Swal.fire({
      title: 'Update Portofolio Failed',
      showConfirmButton: false,
      icon: 'error',
      target: '#custom-target',
      timer: 2000,
      timerProgressBar: true,
      customClass: {
        container: 'position-absolute',
      },
      toast: true,
      position: 'bottom-right',
    });
  }
};
