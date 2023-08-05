import axios from "axios";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const getExperienceUser = (isLogin) => async (dispatch) => {
  try {
    const experiences = await axios.get(
      `${process.env.NEXT_PUBLIC_API}/experience/profile/${isLogin}`
    );
    const result = experiences.data.data;
    dispatch({ type: "GET_ALL_EXPERIENCE_USER", payload: result });
  } catch (err) {
    console.error(err.message);
  }
};

export const createExperience = (data) => async (dispatch) => {
  try {
    const experiences = await axios.post(
      `${process.env.NEXT_PUBLIC_API}/experience`,
      data
    );
    const result = experiences.data.data;

    dispatch({ type: "CREATE_EXPERIENCE", payload: result });
    if (experiences.statusText === "Created") {
      Toast.fire({
        icon: "success",
        title: "Update Success",
      });
      setTimeout(function () {
        window.location.reload();
      }, 2000);
    }
  } catch (err) {
    console.log(err.message);
  }
};

export const editExperience = (exp_id, data, setShow) => async (dispatch) => {
  try {
    const experiences = await axios.put(
      `${process.env.NEXT_PUBLIC_API}/experience/${exp_id}`,
      data
    );
    const result = experiences.data.data;
    setShow(false);
    dispatch({ type: "EDIT_EXPERIENCE", payload: result });
    window.location.reload();
  } catch (err) {
    console.log(err.message);
  }
};

export const deleteExperience = (exp_id, setShow) => async (dispatch) => {
  try {
    const experiences = await axios.delete(
      `${process.env.NEXT_PUBLIC_API}/experience/${exp_id}`
    );
    const result = experiences.data.data;
    setShow(false);
    dispatch({ type: "DELETE_EXPERIENCE", payload: result });
    window.location.reload();
  } catch (err) {
    console.log(err.message);
  }
};
