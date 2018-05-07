// if no cache in localstorage, count default is 3

export default {
  nav: {
    name: 'Ming',
    active: false, // start with nav active
    enabled: false, // start with nav disabled
    responsive: "multiple",
    items: [
      { path: "/dashboard", label: "Dashboard" },
      { path: "/tasks", label: "Tasks" }
    ],
    toggle: false
  }
};
