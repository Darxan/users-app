
export default {
  state: {
    isAuthenticated: localStorage.getItem('isAuthentication') ||  false,
      "users": [
        {
          "id": 13,
          "name": "Sabryna Kuvalis",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/charlesrpratt/128.jpg",
          "phone": "(484) 589-3270 x62254",
          "email": "Burnice87@gmail.com",
          "department": "Customer Support"
        },
        {
          "id": 14,
          "name": "Chadrick Hand",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/chacky14/128.jpg",
          "phone": "111.883.4953",
          "email": "Toby80@yahoo.com",
          "department": "Sales"
        },
        {
          "id": 15,
          "name": "Madelyn Heidenreich",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/sbtransparent/128.jpg",
          "phone": "1-027-873-2296",
          "email": "Danielle.Crist69@gmail.com",
          "department": "Sales"
        },
        {
          "id": 16,
          "name": "Scot Stiedemann",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/adammarsbar/128.jpg",
          "phone": "559-598-4843 x545",
          "email": "Alfonzo49@hotmail.com",
          "department": "Sales"
        },
        {
          "id": 17,
          "name": "Dessie Pollich",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/carlosm/128.jpg",
          "phone": "1-226-764-6391 x438",
          "email": "Dedrick19@gmail.com",
          "department": "Engineering"
        },
        {
          "id": 18,
          "name": "Hudson Lang",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/pierrestoffe/128.jpg",
          "phone": "1-099-172-6273 x27785",
          "email": "Katarina7@hotmail.com",
          "department": "Customer Support"
        },
        {
          "id": 19,
          "name": "Cydney Donnelly",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/reabo101/128.jpg",
          "phone": "637.509.8331 x2980",
          "email": "Joey_Schaefer11@yahoo.com",
          "department": "Engineering"
        },
        {
          "id": 20,
          "name": "Reba Bosco",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/aaronkwhite/128.jpg",
          "phone": "470.851.4077",
          "email": "Ryleigh26@yahoo.com",
          "department": "Customer Support"
        },
        {
          "id": 21,
          "name": "Ms. Virginia Hilll",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/smalonso/128.jpg",
          "phone": "(841) 318-8096",
          "email": "Alysson.Jacobi27@hotmail.com",
          "department": "Sales"
        },
        {
          "id": 22,
          "name": "Delores Auer",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/joaoedumedeiros/128.jpg",
          "phone": "1-590-961-2121",
          "email": "Meghan87@yahoo.com",
          "department": "Engineering"
        },
        {
          "id": 23,
          "name": "Jarrod Buckridge MD",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/anthonysukow/128.jpg",
          "phone": "(249) 871-3020 x863",
          "email": "Francis_Schoen@gmail.com",
          "department": "Sales"
        },
        {
          "id": 24,
          "name": "Mrs. Megane Bechtelar",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/anjhero/128.jpg",
          "phone": "(396) 750-3598",
          "email": "Giuseppe_Grady84@hotmail.com",
          "department": "Sales"
        },
        {
          "id": 25,
          "name": "Luella White III",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/dparrelli/128.jpg",
          "phone": "(932) 711-6709 x842",
          "email": "Cynthia_Parker92@gmail.com",
          "department": "Engineering"
        },
        {
          "id": 26,
          "name": "Kiana Hane",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/ariil/128.jpg",
          "phone": "(614) 716-9728",
          "email": "Jennie.White27@hotmail.com",
          "department": "Sales"
        },
        {
          "id": 27,
          "name": "Jerrell Littel",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/otozk/128.jpg",
          "phone": "(690) 170-0291 x4945",
          "email": "Whitney15@hotmail.com",
          "department": "Customer Support"
        },
        {
          "id": 28,
          "name": "Jennyfer Wyman",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/levisan/128.jpg",
          "phone": "1-863-881-3987",
          "email": "Nelson45@hotmail.com",
          "department": "Sales"
        }
    ]
  },
  mutations: {
    UPDATE_DATA(state, payload) {
      state.users = payload;
    },
    UPDATE_USER_INFO(state, payload) {
      state.users.map(user => {
        if (user.id === payload.id) {
          user.name = payload.name;
          user.username = payload.username;
          user.avatar = payload.avatar;
          user.phone = payload.phone;
          user.email = payload.email;
          user.department = payload.department;
        }
      });
    },
    REMOVE_USER(state, payload) {
      state.users = state.users.filter(item => item.id !== payload);
    },
    CREATE_USER_CARD(state, payload) {
      state.users.push(payload);
    },
    CHANGE_STATE_USER(state, payload) {
      state.isAuthenticated = payload;
    },
    FETCH_DATA(state, data) {
      state.users = data;
    },
    LOG_OUT(state) {
      state.isAuthenticated = false
    }
  },
  actions: {
    fetchUserData({ commit }) {
      try {
        fetch("http://localhost:3000/users", {
          method: "GET"
        })
          .then(response => {
            return response.json();
          })
          .then(data => {
            commit("FETCH_DATA", data);
          });
      } catch (err) {
        alert(err.message);
        console.log(err);
      }
    },
    logout({ commit }) {
      commit("LOG_OUT", null);
      localStorage.removeItem('isAuthentication');
      return true;
    },
    login({ commit }, payload) {
      if (payload.email === "admin@admin.com" && payload.password === "123") {
        commit("CHANGE_STATE_USER", true);
        localStorage.setItem('isAuthentication', true)
        return true;
      } else return false;
    },
    updateUserInfo({ commit }, payload) {
      console.log("payload", payload);
      commit("UPDATE_USER_INFO", payload);
      return true;
    },
    removeUserHandler({ commit }, payload) {
      if (payload > 0) {
        commit("REMOVE_USER", payload);
        return true;
      }
    },
    createUserCard({ commit }, payload) {
      console.log("payload", payload);
      if (payload) {
        commit("CREATE_USER_CARD", payload);
        return true;
      } else return false;
    },
    
  },
  getters: {
    getUsersData:(state) => state.users,
    getUsersDataLength: (state) => state.users.length,
    isAuthorized: (state) => state.isAuthenticated
  }
};

// REMOVE USER IN DB 
// try {
//   fetch("http://localhost:3000/users/`${payload}`", {
//     method: "DELETE"
//   }).then(response => {
//     console.log(response);
//     commit("REMOVE_USER", payload);
//   });
// } catch (err) {
//   alert(err.message);
//   console.log(err);
// }
// try {
//   console.log(payload)
//   fetch("http://localhost:3000/users/", {
//     method: "POST",
//     cache: "no-cache",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: payload
//   }).then(response => {
//     console.log(response);
//     dispatch("fetchUserData");
//   });
// } catch (err) {
//   alert(err.message);
//   console.log(err);
// }