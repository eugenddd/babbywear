export default context => {
  return {
    modifiers: {
      snakeCase: str => str.split(" ").join("-")
    }
  };
};
