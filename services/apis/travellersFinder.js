const TravellersFinder = {};
// const URL = "https://travel-app-backend.vercel.app/travellers/";
const URL = "http://localhost:3500/travellers/";

TravellersFinder.getAll = async () => {
  const response = await fetch(URL, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return await response.json();
};

TravellersFinder.create = async (traveler) => {
  const response = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...traveler }),
  });
  return await response.json();
};

TravellersFinder.update = async (traveler) => {
  const response = await fetch(URL, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...traveler }),
  });
  return await response.json();
};

TravellersFinder.delete = async (traveler) => {
  const response = await fetch(URL + traveler, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  return await response.json();
};

export default TravellersFinder;
