import axios from 'axios';
import {toast} from 'react-hot-toast';

export const getExperienceUser = (login) => async (dispatch) => {
  try {
    const experiences = await axios.get(`https://rekrut-server.vercel.app/experience/profile/${login}`);
    const result = experiences.data.data;
    dispatch({type: 'GET_ALL_EXPERIENCE_USER', payload: result});
  } catch (error) {
    console.error(error.message);
  }
};

export const createExperience = (experienceAction) => async (dispatch) => {
  try {
    const experiences = await axios.post(`https://rekrut-server.vercel.app/experience/`, experienceAction);
    const result = experiences.data.data;
    dispatch({type: 'CREATE_EXPERIENCE', payload: result});
    toast.success('Experience Created', {
      duration: 1500,
      position: 'top-center',
    });
    setTimeout(function () {
      window.location.reload();
    }, 1000);
  } catch (error) {
    console.log(error.message);
    toast.error('Create Experience Failed', {
      duration: 1500,
      position: 'top-center',
    });
  }
};

export const updateExperience = (id, experienceAction, setShow) => async (dispatch) => {
  try {
    const experiences = await axios.put(`https://rekrut-server.vercel.app/experience/${id}`, experienceAction);
    const result = experiences.data.data;
    setShow(false);
    dispatch({type: 'EDIT_EXPERIENCE', payload: result});
    toast.success('Experience Updated', {
      duration: 1500,
      position: 'top-center',
    });
    window.location.reload();
  } catch (err) {
    console.log(err.message);
    toast.error('Update Experience Failed', {
      duration: 1500,
      position: 'top-center',
    });
  }
};

export const deleteExperience = (exp_id, setShow) => async (dispatch) => {
  try {
    const experiences = await axios.delete(`https://rekrut-server.vercel.app/experience/${id}`);
    const result = experiences.data.data;
    setShow(false);
    toast.success('Experience Deleted', {
      duration: 1500,
      position: 'top-center',
    });
    dispatch({type: 'DELETE_EXPERIENCE', payload: result});
    window.location.reload();
  } catch (err) {
    console.log(err.message);
  }
};
