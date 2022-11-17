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


export const validateLogIn = (userName,  password) => {
  return axios.post(`${BASE_URL}/users/login`, {
    username: userName,
    password: password,
  }).then(({ data }) => {
    return data
  }).catch(({response}) => {
    return (response.data.message)
  }) 
}

export const getProfileData = (username) => {
    let path = `users/${username}`
    return api
    .get(path)
    .then(({ data }) => {
      console.log(data)

      return data;
    }).catch((error) => {
      console.log(error.response)
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


export const getFilteredCrops = (outdoors, soiltype, sunlight) => {
  let path = `/crops`
  if (outdoors) path += `?outdoors=${outdoors}`;
  if (soiltype) path += `&&soilTypes=${soiltype}`;
  if (sunlight) path += `&&sunlight=${sunlight}`;
  return api
  .get(path)
  .then(({ data }) => {
    console.log(path)
    return data;
  })
};

export const postUser = (firstName, userName, parentsEmail, password) => {
  return axios.post(`${BASE_URL}/users/signup`, {
    name: firstName,
    username: userName,
    parentsEmail: parentsEmail,
    password: password,
  }).then(({ data }) => {
    console.log(data)
    return data

  })
}