import axios from 'axios';
import {toast} from 'react-hot-toast';

export const getSkillUser = (login) => async (dispatch) => {
  try {
    const skills = await axios.get(`https://zany-ruby-whale-veil.cyclic.app/skill/profile/${login}`);
    const result = skills.data.data;
    dispatch({type: 'GET_ALL_SKILL_USER', payload: result});
  } catch (err) {
    console.error(err.message);
  }
};

export const createSkill = (skillAction) => async (dispatch) => {
  try {
    const skills = await axios.post(`https://zany-ruby-whale-veil.cyclic.app/skill/`, skillAction);
    toast.success('Skill Added', {
      duration: 1500,
      position: 'top-center',
    });
    setTimeout(function () {
      window.location.reload(1);
    }, 1000);
    const result = skills.data.data;
    dispatch({type: 'CREATE_SKILL', payload: result});
  } catch (err) {
    toast.error('Submit skills incorrect', {
      duration: 1500,
      position: 'top-center',
    });
  }
};

export const deleteSkill = (id, setShow) => async (dispatch) => {
  try {
    const skills = await axios.delete(`https://zany-ruby-whale-veil.cyclic.app/skill/${id}`);
    const result = skills.data.data;
    setShow(false);
    toast.success('Skill Deleted', {
      duration: 1500,
      position: 'top-center',
    });
    dispatch({type: 'DELETE_SKILL', payload: result});
    window.location.reload();
  } catch (err) {
    console.log(err.message);
  }
};
