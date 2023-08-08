import axios from 'axios';
import Swal from 'sweetalert2';

export const getSkillUser = (login) => async (dispatch) => {
  try {
    const skills = await axios.get(`http://localhost:4000/skill/profile/${login}`);
    const result = skills.data.data;
    dispatch({type: 'GET_ALL_SKILL_USER', payload: result});
  } catch (err) {
    console.error(err.message);
  }
};

export const createSkill = (skillAction) => async (dispatch) => {
  try {
    const skills = await axios.post(`http://localhost:4000/skill/`, skillAction);
    Swal.fire({
      icon: 'success',
      title: 'Create Skills Success',
    });
    setTimeout(function () {
      window.location.reload(1);
    }, 1000);
    const result = skills.data.data;
    dispatch({type: 'CREATE_SKILL', payload: result});
  } catch (err) {
    Swal.fire({
      icon: 'error',
      title: 'Create Skills failed',
    });
  }
};

export const deleteSkill = (id, setShow) => async (dispatch) => {
  try {
    const skills = await axios.delete(`http://localhost:4000/skill/profile/${id}`);
    const result = skills.data.data;
    setShow(false);
    dispatch({type: 'DELETE_SKILL', payload: result});
    window.location.reload();
  } catch (err) {
    console.log(err.message);
  }
};
