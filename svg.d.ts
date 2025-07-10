// Позволяет импортировать SVG как React-компоненты через SVGR
// https://react-svgr.com/docs/next/
declare module "*.svg" {
  import * as React from "react";
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
  export default ReactComponent;
}
