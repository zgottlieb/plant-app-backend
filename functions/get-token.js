import fetch from "node-fetch";

// The parameters for our POST request
const params = {
  origin: "http://localhost:3000",
  // ip: "THE-WEBSITE-USER-IP",
  token: process.env.TREFLE_ACCESS_TOKEN,
};

exports.handler = async () => {
  const response = await fetch("https://trefle.io/api/auth/claim", {
    method: "post",
    body: JSON.stringify(params),
    headers: { "Content-Type": "application/json" },
  });
  const json = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify(json),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    },
  };
};
