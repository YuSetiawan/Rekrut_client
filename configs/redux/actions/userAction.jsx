import axios from 'axios';
import {toast} from 'react-hot-toast';

export const getAllUser = () => async (dispatch) => {
  try {
    const users = await axios.get(`https://zany-ruby-whale-veil.cyclic.app/user/profile`);
    const result = users.data.data;
    dispatch({type: 'GET_ALL_USER', payload: result});
  } catch (err) {
    console.error(err.message);
  }
};

export const editUser = (login, userAction) => async (dispatch) => {
  try {
    const users = await axios.put(`https://zany-ruby-whale-veil.cyclic.app/user/profile/${login}`, userAction);
    const result = users.data.data;
    console.log(result);
    toast.success('Update data profile succes', {
      duration: 1500,
      position: 'top-center',
    });
    // setTimeout(function () {
    //   window.location.reload(1);
    // }, 1000);
    dispatch({type: 'EDIT_USER', payload: result});
  } catch (err) {
    console.log(err.message);
    toast.error('Update data profile failed', {
      duration: 1500,
      position: 'top-center',
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
    toast.success('Update image profile succes', {
      duration: 1500,
      position: 'top-center',
    });
    // window.location.reload();
    dispatch({type: 'EDIT_USER_PHOTO', payload: result});
  } catch (err) {
    console.log(err.message);
    toast.error('Update image profile failed', {
      duration: 1500,
      position: 'top-center',
    });
  }
};
