import axios from 'axios';
import Swal from 'sweetalert2';

export const getSkillUser = (id) => async (dispatch) => {
  try {
    const skills = await axios.get(`https://zany-ruby-whale-veil.cyclic.app/skill/profile/${id}`);
    const result = skills.data.data;
    dispatch({type: 'GET_ALL_SKILL_USER', payload: result});
  } catch (err) {
    console.error(err.message);
  }
};

export const createSkill = (skillAction) => async (dispatch) => {
  try {
    const skills = await axios.post(`https://zany-ruby-whale-veil.cyclic.app/skill/`, skillAction);
    Swal.fire({
      title: 'Skill Added',
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
    const result = skills.data.data;
    dispatch({type: 'CREATE_SKILL', payload: result});
  } catch (err) {
    Swal.fire({
      title: 'Submit skills failed',
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

export const deleteSkill = (id, setShow) => async (dispatch) => {
  try {
    const skills = await axios.delete(`https://zany-ruby-whale-veil.cyclic.app/skill/${id}`);
    const result = skills.data.data;
    setShow(false);
    Swal.fire({
      title: 'Skill Deleted',
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
    dispatch({type: 'DELETE_SKILL', payload: result});
    window.location.reload();
  } catch (err) {
    console.log(err.message);
  }
};
