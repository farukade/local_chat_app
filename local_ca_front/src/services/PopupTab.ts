import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";

const MySwal = withReactContent(Swal);

// export const handleError = (msg: string) => {
//   return MySwal.fire({
//     text: msg || "Something went wrong!",
//     icon: "error",
//     showConfirmButton: false,
//     timer: 2000,
//   });
// };

export const RegisterSuccess = async () => {
  return MySwal.fire({
    text: "You Are Successfully Signed Up",
    iconHtml: '<img src="https://cdn-icons-png.flaticon.com/512/4353/4353420.png">',
    allowOutsideClick: false,
    allowEscapeKey: false,
    showConfirmButton: true,
    focusConfirm: false,
    confirmButtonColor: "#49b36c",
    confirmButtonAriaLabel: "Arrow Redirect to Login",
    confirmButtonText: "Redirect to Login",
    customClass: { icon: "no-border", confirmButton: "swal-button", htmlContainer: "swal-text" },
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "/";
    }
  });
};

// https://sweetalert.js.org/docs/
// <img src="https://cdn-icons-png.flaticon.com/512/4353/4353420.png" width="30px">
