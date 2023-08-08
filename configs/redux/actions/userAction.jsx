import axios from 'axios';
import Swal from 'sweetalert2';

export const getAllUser = () => async (dispatch) => {
  try {
    const users = await axios.get(`http://localhost:4000/user/profile`);
    const result = users.data.data;
    dispatch({type: 'GET_ALL_USER', payload: result});
  } catch (err) {
    console.error(err.message);
  }
};

export const editUser = (login, userAction) => async (dispatch) => {
  try {
    const users = await axios.put(`http://localhost:4000/user/profile/${login}`, userAction);
    const result = users.data.data[0];
    console.log(result);
    if (users.data.statusCode === 200) {
      Swal.fire({
        icon: 'success',
        title: 'Update Success',
      });
      setTimeout(function () {
        window.location.reload(1);
      }, 1000);
    }
    dispatch({type: 'EDIT_USER', payload: result});
  } catch (err) {
    console.log(err.message);
  }
};

export const editPhotoUser = (id, photo) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append('wrk_photo', photo);
    const workers = await axios.put(`http://localhost:4000/user/profile/${id}`, formData);
    const result = workers.data.data[0];
    console.log(result);
    window.location.reload();
    dispatch({type: 'EDIT_USER_PHOTO', payload: result});
  } catch (err) {
    console.log(err.message);
  }
};