// import Axios from "axios";
import axiosApi from "../../axiosApi";
import { toast } from "react-toastify";

export const registration = (type, data) => {
  return axiosApi({
    method: "post",
    url: `/sign-up/${type}`,
    data,
  })
    .then((response) => {
      if (response.status === 201) {
        toast.success(
          type === "fan"
            ? "Fan created successfully."
            : "Talent created successfully."
        );
        return response;
      } else {
        toast.error("Something went wrong.");
      }
    })
    .catch((error) => {
      toast.error("Something went wrong.");
      return error;
    });
};
