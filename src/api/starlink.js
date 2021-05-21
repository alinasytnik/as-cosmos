import { baseURL } from "./utils";

export async function getStarlink() {
  try {
    const res = await fetch(`${baseURL}/starlink`);
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      console.error(res.status);
    }
  } catch (e) {
    console.error(e);
  }
}
