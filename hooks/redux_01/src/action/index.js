export const increment = (m) => {
  return {
    type: "INCREMENT",
    payload: m
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
