import { Fragment } from "react";

// Renders a string with "\n" as line breaks.
export default function Lines({ text }) {
  return text.split("\n").map((line, i, arr) => (
    <Fragment key={i}>
      {line}
      {i < arr.length - 1 && <br />}
    </Fragment>
  ));
}
