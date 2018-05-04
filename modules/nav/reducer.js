// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP
import { NAV_ACTIVATE, NAV_ENABLE, NAV_RESPONSIVE } from "./actions";

export default (
  state = {
    items: [
      { path: "/dashboard", label: "Dashboard" },
      { path: "/tasks", label: "Tasks" }
    ],
    toggleFade: true
  },
  action
) => {
  switch (action.type) {
    case NAV_ACTIVATE: {
      return { active: action.active, activateOnMultiple: undefined };
    }
    case NAV_ENABLE: {
      return { enabled: action.enabled };
    }
    case NAV_RESPONSIVE: {
      const result = { responsive: action.responsive };
      if (action.responsive === "single" && state.active) {
        result.active = false;
        result.activateOnMultiple = true;
      } else if (action.responsive === "multiple" && state.activateOnMultiple) {
        result.active = true;
      }
      return result;
    }
    default:
      return state;
  }
};
