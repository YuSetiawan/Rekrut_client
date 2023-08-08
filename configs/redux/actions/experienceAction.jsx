import axios from 'axios';
import Swal from 'sweetalert2';

export const getExperienceUser = (login) => async (dispatch) => {
  try {
    const experiences = await axios.get(`http://localhost:4000/experience/profile/${login}`);
    const result = experiences.data.data;
    dispatch({type: 'GET_ALL_EXPERIENCE_USER', payload: result});
  } catch (error) {
    console.error(error.message);
  }
};

export const createExperience = (experienceAction) => async (dispatch) => {
  try {
    const experiences = await axios.post(`http://localhost:4000/experience/`, experienceAction);
    const result = experiences.data.data;
    dispatch({type: 'CREATE_EXPERIENCE', payload: result});
    Swal.fire({
      icon: 'success',
      title: 'Create Experience Success',
    });
    setTimeout(function () {
      window.location.reload();
    }, 1000);
  } catch (error) {
    console.log(error.message);
    Swal.fire({
      icon: 'error',
      title: 'Create Experience failed',
    });
  }
};

export const updateExperience = (id, experienceAction, setShow) => async (dispatch) => {
  try {
    const experiences = await axios.put(`http://localhost:4000/experience/${id}`, experienceAction);
    const result = experiences.data.data;
    setShow(false);
    dispatch({type: 'EDIT_EXPERIENCE', payload: result});
    Swal.fire({
      icon: 'success',
      title: 'Edit experience Success',
    });
    window.location.reload();
  } catch (err) {
    console.log(err.message);
    Swal.fire({
      icon: 'error',
      title: 'Edit experience failed',
    });
  }
};

export const deleteExperience = (exp_id, setShow) => async (dispatch) => {
  try {
    const experiences = await axios.delete(`http://localhost:4000/experience/${id}`);
    const result = experiences.data.data;
    setShow(false);
    dispatch({type: 'DELETE_EXPERIENCE', payload: result});
    window.location.reload();
  } catch (err) {
    console.log(err.message);
  }
};
