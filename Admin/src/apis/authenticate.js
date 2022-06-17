import axios from "../helpers/axios";

const AuthenticateAPI = {
  getAllAuthenticate: async () => {
    const res = await axios.get(`/authenticate/getAll`);

    return res;
  },
};

export default AuthenticateAPI;
