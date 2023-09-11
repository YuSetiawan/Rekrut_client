import axios from 'axios';
import Swal from 'sweetalert2';

export const getAllUser = () => async (dispatch) => {
  try {
    const users = await axios.get(`https://zany-ruby-whale-veil.cyclic.app/user/profile`);
    const result = users.data.data;
    dispatch({type: 'GET_ALL_USER', payload: result});
  } catch (err) {
    console.error(err.message);
  }
};

export const editUser = (id, userAction) => async (dispatch) => {
  try {
    const users = await axios.put(`https://zany-ruby-whale-veil.cyclic.app/user/profile/${id}`, userAction);
    const result = users.data.data;
    console.log(result);
    Swal.fire({
      title: 'Update data profile succes',
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
      window.location.reload(1);
    }, 1000);
    dispatch({type: 'EDIT_USER', payload: result});
  } catch (err) {
    console.log(err.message);
    Swal.fire({
      title: 'Update data profile failed',
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

export const editPhotoUser = (id, photo) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append('photo', photo);
    const workers = await axios.put(`https://zany-ruby-whale-veil.cyclic.app/user/profilephoto/${id}`, formData);
    const result = workers.data.data[0];
    console.log(result);
    Swal.fire({
      title: 'Update image profile succes',
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
    // window.location.reload();
    dispatch({type: 'EDIT_USER_PHOTO', payload: result});
  } catch (err) {
    console.log(err.message);
    Swal.fire({
      title: 'Update image profile failed',
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
