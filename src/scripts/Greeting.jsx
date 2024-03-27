const Greeting = () => {
  const date = new Date();
  const currentTime = date.getHours();

  let greeting;

  if (currentTime < 12) {
    greeting = "Good Morning☀️";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon🌤️";
  } else {
    greeting = "Good Evening🌙";
  }

  return <div>{greeting}</div>;
};

export default Greeting;
