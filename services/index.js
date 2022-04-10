var getTravelers = {};
const URL = process.env.REACT_APP_URL_SERVER + "travellers/";

// feth all travlers
getTravellers.all = async () => {
  const response = await fetch(URL, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return await response.json();
};

export default getTraveller;
