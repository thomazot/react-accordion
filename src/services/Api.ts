export default function Api<T>(url: string): Promise<T> {
  return fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  }).then((response) => response.json())
}
