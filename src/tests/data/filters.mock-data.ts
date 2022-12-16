export default {
  type: "",
  date: "",
  page: 1,
  handleFilter: (reset = false) => {
    if (reset) console.log("RESET");
    console.log("FILTER");
  },
};
