const HOME_API = "/api/homes";
const ROOM_API = "/api/rooms";

const getHomes = async () => {
  return fetch(HOME_API).then(getJSON);
};

const getHomeById = async (id) => {
  return fetch(`${HOME_API}/${id}`).then(getJSON);
};

const getRoomById = async (id) => {
  return fetch(`${ROOM_API}/${id}`).then(getJSON);
};

const getJSON = (response) => response.json();

export { getHomes, getHomeById, getRoomById };
