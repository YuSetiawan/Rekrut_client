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

export const getWorkerUser = (isLogin) => async (dispatch) => {
  try {
    const workers = await axios.get(
      `${process.env.NEXT_PUBLIC_API}/worker/profile/${isLogin}`
    );
    const result = workers.data.data;
    dispatch({ type: "GET_ALL_WORKER_USER", payload: result });
  } catch (err) {
    console.error(err.message);
  }
};

export const editWorker = (wrk_id, worker) => async (dispatch) => {
  try {
    const workers = await axios.put(
      `${process.env.NEXT_PUBLIC_API}/worker/profile/${wrk_id}`,
      worker
    );
    const result = workers.data.data[0];
    console.log(result);
    if (workers.data.statusCode === 200) {
      Toast.fire({
        icon: "success",
        title: "Update Success",
      });
      setTimeout(function () {
        window.location.reload(1);
      }, 2000);
    }
    dispatch({ type: "EDIT_WORKER", payload: result });
  } catch (err) {
    console.log(err.message);
  }
};

export const editPhotoWorker = (wrk_id, photo) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("wrk_photo", photo);
    const workers = await axios.put(
      `${process.env.NEXT_PUBLIC_API}/worker/profilephoto/${wrk_id}`,
      formData
    );
    const result = workers.data.data[0];
    console.log(result);
    window.location.reload();
    dispatch({ type: "EDIT_WORKER_PHOTO", payload: result });
  } catch (err) {
    console.log(err.message);
  }
};
