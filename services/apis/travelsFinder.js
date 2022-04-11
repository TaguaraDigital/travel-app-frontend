const TravelFinder = {};
const URL = "https://travel-app-backend.vercel.app/travels/";
// const URL = "http://localhost:3500/travels/";

TravelFinder.getAll = async () => {
  const response = await fetch(URL, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return await response.json();
};

TravelFinder.create = async (travel) => {
  const response = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...travel }),
  });
  return await response.json();
};

TravelFinder.update = async (travel) => {
  const response = await fetch(URL, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...travel }),
  });
  return await response.json();
};

TravelFinder.delete = async (travel) => {
  const response = await fetch(URL + travel, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  return await response.json();
};

export default TravelFinder;
