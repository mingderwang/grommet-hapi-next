// Nav
export const NAV_ACTIVATE = "NAV_ACTIVATE";
export const NAV_ENABLE = "NAV_ENABLE";
export const NAV_RESPONSIVE = "NAV_RESPONSIVE";

// action creators
export function navActivate(active) {
  return { type: NAV_ACTIVATE, active };
}

export function navEnable(enabled) {
  return { type: NAV_ENABLE, enabled };
}

export function navResponsive(responsive) {
  return { type: NAV_RESPONSIVE, responsive };
}
