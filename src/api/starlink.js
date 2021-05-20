import { baseURL } from "./utils";

export async function getStarlink() {
  try {
    await fetch(`${baseURL}/starlink`);
  } catch (e) {
    console.error(e);
  }
}
