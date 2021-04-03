exports.handler = async (event) => {
  console.log(event, event.queryStringParameters);
  const subject = event.queryStringParameters.name || "World";
  return {
    statusCode: 200,
    body: `Hello ${subject}!`,
  };
};
