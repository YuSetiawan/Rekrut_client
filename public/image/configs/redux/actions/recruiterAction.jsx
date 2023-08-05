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

export const getRecruiterUser = (isLogin) => async (dispatch) => {
  try {
    const recruiters = await axios.get(
      `${process.env.NEXT_PUBLIC_API}/recruiter/profile/${isLogin}`
    );
    const result = recruiters.data.data;
    dispatch({ type: "GET_ALL_RECRUITER_USER", payload: result });
  } catch (err) {
    console.error(err.message);
  }
};

export const editRecruiter = (rec_id, recruiter) => async (dispatch) => {
  try {
    const recruiters = await axios.put(
      `${process.env.NEXT_PUBLIC_API}/recruiter/profile/${rec_id}`,
      recruiter
    );
    const result = recruiters.data.data[0];

    if (recruiters.data.statusCode === 200) {
      Toast.fire({
        icon: "success",
        title: "Update Success",
      });
      setTimeout(function () {
        window.location.reload(1);
      }, 2000);
    }

    dispatch({ type: "EDIT_RECRUITER", payload: result });
  } catch (err) {
    console.log(err.message);
  }
};

export const editPhotoRecruiter = (rec_id, photo) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("rec_photo", photo);
    const recruiters = await axios.put(
      `${process.env.NEXT_PUBLIC_API}/recruiter/profilephoto/${rec_id}`,
      formData
    );
    const result = recruiters.data.data[0];
    console.log(result);
    window.location.reload();
    dispatch({ type: "EDIT_RECRUITER_PHOTO", payload: result });
  } catch (err) {
    console.log(err.message);
  }
};
