import axios from "axios";
const BASE_URL = "https://crops-app-mtech.cyclic.app/api";
const api = axios.create({
    baseURL: "https://crops-app-mtech.cyclic.app/api",
  });


export const getCrops = () => {
    let path = `/crops`
    return api
    .get(path)
    .then(({ data }) => {
      return data;
    })
};

// export const getUsers = () => {
//     let path = `/users`
//     return api
//     .get(path)
//     .then(({ data }) => {
//       return data;
//     })
// };

export const getProfileData = () => {
    let path = `users/TotallyNotACat`
    return api
    .get(path)
    .then(({ data }) => {
        console.log(data)
      return data;
    })
};


export const getPlantedCrop = () => {
    let path = `allotment/carrots`
    return api
    .get(path)
    .then(({ data }) => {
        console.log(data)
      return data;
    })
};
