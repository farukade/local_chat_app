import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { UserIcon, EyeIcon, ArrowLongRightIcon } from "@heroicons/react/24/solid";

const MySwal = withReactContent(Swal);

// export const handleError = (msg: string) => {
//   return MySwal.fire({
//     text: msg || "Something went wrong!",
//     icon: "error",
//     showConfirmButton: false,
//     timer: 2000,
//   });
// };

export const RegisterSuccess = () => {
  return MySwal.fire({
    text: "You Are Successfully Signed Up",
    iconHtml: '<img src="https://cdn-icons-png.flaticon.com/512/4353/4353420.png">',
    customClass: { icon: "no-border" },
    html: '<a href="/"> Redirect to login page </a>',
    showConfirmButton: true,
    focusConfirm: false,

    confirmButtonText: '<img src="https://cdn-icons-png.flaticon.com/512/4353/4353420.png" width="30px">Great!',
  });
};

// https://sweetalert.js.org/docs/
