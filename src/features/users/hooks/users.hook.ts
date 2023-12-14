import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../core/store/store";
import { LoginUser, UserStructure } from "../models/user";
import { loginUserThunk, updateUserThunk } from "../slices/user.thunk";
import { ApiRepoUserStructures } from "../services/api.repo.users";

export function useUsers() {
  const { token } = useSelector((state: RootState) => state.userState);

  const dispatch = useDispatch<AppDispatch>();
  const repo = new ApiRepoUserStructures();

  const register = (newUser: Partial<UserStructure>) => {
    repo.registerUser(newUser);
  }

  const login = (loginUser: LoginUser) => {
    dispatch(loginUserThunk({ loginUser, repo}));
  };

  const update = (updatedUser: Partial<UserStructure>, id: UserStructure['id']) => {
    dispatch(updateUserThunk({repo, token, id, updatedUser}));
  }

  return{
    register,
    login,
    update
  }
}
