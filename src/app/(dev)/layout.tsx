import Page from "@/components/template/page";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function layoutEvent(props: any) {
  return <Page>{props.children}</Page>;
}
