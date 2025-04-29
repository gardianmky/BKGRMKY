const apiKey = process.env.NEXT_PUBLIC_REAL_ESTATE_API_KEY;

async function fetchData() {
  const response = await fetch('https://api.example.com/data', {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });

  const data = await response.json();
  console.log(data);
}

fetchData();