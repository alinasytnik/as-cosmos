import { baseURL } from "./utils";

export async function getCrew() {
  try {
    const res = await fetch(`${baseURL}/crew`);
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
