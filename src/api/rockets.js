import { baseURL } from "./utils";

export async function getRockets() {
  try {
    const res = await fetch(`${baseURL}/rockets`);
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
