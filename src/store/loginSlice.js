import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const { REACT_APP_USER_KEY, REACT_APP_USER_API } = process.env;

function getUserApi() {
  let user = localStorage.getItem(REACT_APP_USER_KEY);

  if (user === null || user === "") {
    return null;
  } else {
    return JSON.parse(user);
  }
}

const initialState = {
  user: getUserApi(),
  userLogged: false,
};

export const logIn = createAsyncThunk("login/logIn", async (userInfo) => {
  const response = await fetch(REACT_APP_USER_API + "login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  });

  const data = await response.json();
  if (response.status === 200) {
    localStorage.setItem(REACT_APP_USER_KEY, JSON.stringify(data));
    window.location.reload();
    return data;
  } else {
    throw data;
  }
});

export const checkLogged = createAsyncThunk(
  "login/checkLogged",
  async (token) => {
    const response = await fetch(REACT_APP_USER_API + "users", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  }
);

export const loginSlice = createSlice({
  name: "login/login",
  initialState,
  reducers: {
    userLogout: () => {
      localStorage.setItem(REACT_APP_USER_KEY, "");
      window.location.reload();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkLogged.pending, (state) => {
        state.userLogged = false;
      })
      .addCase(checkLogged.fulfilled, (state) => {
        state.userLogged = true;
      })
      .addCase(checkLogged.rejected, (state) => {
        state.userLogged = false;
      });
  },
});

export const { userLogout } = loginSlice.actions;

export default loginSlice.reducer;
