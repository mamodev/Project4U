import { useEffect, useRef, useState } from "react";
import PortalContext from "./PortalContext";

export default function PortalContextProvider({ children }) {
  const [container, setContainer] = useState();
  const containerRef = useRef();
  useEffect(() => setContainer(containerRef), []);

  return (
    <PortalContext.Provider value={container?.current}>
      <div ref={containerRef}>{container?.current && children}</div>
    </PortalContext.Provider>
  );
}
