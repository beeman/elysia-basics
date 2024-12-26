const baseUrl = 'http://localhost:3000'

function post(path: string, payload: Record<string, string>) {
  return fetch(`${baseUrl}/${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
}

async function main() {
  const payload = {
    foo: 'bar',
  }

  const formResult = await post('/form', payload)

  console.log(`result:`, await formResult.json())
}

main().catch(console.error)
