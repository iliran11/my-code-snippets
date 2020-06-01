async function f() {
  const res = (
    await fetch(
      "https://liran.bookaway.dev/_api/bookings/lines/5eba9b85903e2a5c2b3d696b",
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "accept-language": "en-US,en;q=0.9",
          authorization:
            "Bearer i3AOeJ7MKWUuvjobwqkCwAMPEaQvvNhh7ifDaGCLDxF1eBe9hXoAIVxl7CXO3LAsmBcmDKLT5BM65Hsx3ucMUAtsbLXwu0HZQwvZGb6uMZdrwJrh0dUD9KgeMsTEPpirsIsJ3m6t3DCPXXeDG4ScshDoJtJEivrtPQ17gVr2L11r7SmCcy3hojH0QLyta54w1ncX6Dw2FzvPui9SgyeAqZfmvrnPjUjmKLb0U0fiC1ah44llKwa17G1rPkZ2l5a1",
          "cache-control": "no-cache",
          pragma: "no-cache",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
        },
        referrer:
          "https://admin-liran.bookaway.dev/lines/edit/5eba9b85903e2a5c2b3d696b",
        referrerPolicy: "no-referrer-when-downgrade",
        body: null,
        method: "GET",
        mode: "cors",
        credentials: "include",
      }
    )
  )
  result =  await res.json()
  console.log(result);
}
