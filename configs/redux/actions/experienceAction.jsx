import axios from 'axios';
import Swal from 'sweetalert2';

export const getExperienceUser = (id) => async (dispatch) => {
  try {
    const experiences = await axios.get(`https://zany-ruby-whale-veil.cyclic.app/experience/profile/${id}`);
    const result = experiences.data.data;
    dispatch({type: 'GET_ALL_EXPERIENCE_USER', payload: result});
  } catch (error) {
    console.error(error.message);
  }
};

export const createExperience = (experienceAction) => async (dispatch) => {
  try {
    const experiences = await axios.post(`https://zany-ruby-whale-veil.cyclic.app/experience/`, experienceAction);
    const result = experiences.data.data;
    dispatch({type: 'CREATE_EXPERIENCE', payload: result});
    Swal.fire({
      title: 'Experience Created',
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
    }, 1000);
  } catch (error) {
    console.log(error.message);
    Swal.fire({
      title: 'Create Experience Failed',
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

export const updateExperience = (id, experienceAction, setShow) => async (dispatch) => {
  try {
    const experiences = await axios.put(`https://zany-ruby-whale-veil.cyclic.app/experience/${id}`, experienceAction);
    const result = experiences.data.data;
    setShow(false);
    dispatch({type: 'EDIT_EXPERIENCE', payload: result});
    Swal.fire({
      title: 'Experience Updated',
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
    window.location.reload();
  } catch (err) {
    console.log(err.message);
    Swal.fire({
      title: 'Update Experience Failed',
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

export const deleteExperience = (exp_id, setShow) => async (dispatch) => {
  try {
    const experiences = await axios.delete(`https://zany-ruby-whale-veil.cyclic.app/experience/${id}`);
    const result = experiences.data.data;
    setShow(false);
    Swal.fire({
      title: 'Experience deleted',
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
    dispatch({type: 'DELETE_EXPERIENCE', payload: result});
    window.location.reload();
  } catch (err) {
    console.log(err.message);
  }
};
