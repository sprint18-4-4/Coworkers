declare module "*.svg" {
  const ReactComponent: (props: import("react").SVGProps<SVGSVGElement> & { title?: string }) => JSX.Element;
  export default ReactComponent;
}
