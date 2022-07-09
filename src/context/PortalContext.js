import React, { useContext } from "react";
const PortalContext = React.createContext({});

function usePortal() {
  return useContext(PortalContext);
}
export default PortalContext;
export { usePortal };
