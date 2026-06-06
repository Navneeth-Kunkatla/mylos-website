import { Redirect } from "wouter";

/** Legacy route — single-page site lives at /#find-us */
export default function FindUs() {
  return <Redirect to="/#find-us" />;
}
