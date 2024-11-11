
let apiToken = ""
async function checkConnection(apiUrl:string, apiToken: string){
    const resp = await fetch(apiUrl,{
        method: 'POST',
        headers:  {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiToken}`
        },
        body: JSON.stringify({
            query: `{
                viewer {
                    login
                }
            }`
        })
    });
    return await resp.json();
}

async function fetchData(){
    const response = await checkConnection("https://api.github.com/graphql",apiToken)
    console.log(response)
}

void fetchData()

async function checkRepositories(apiUrl: string, apiToken: string) {
    const resp = await fetch(apiUrl,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiToken}`
        },
        body: JSON.stringify({
            query: `{
              viewer {
                repositories(first: 5) {
                  nodes {
                    name
                    description
                    stargazerCount
                  }
                }
              }
            }`
        })
    });
    return await resp.json()
}

async function fetchRepositories(apiUrl: string, apiToken: string) {
    const data = await checkRepositories(apiUrl,apiToken)
    console.log(data)
}

void fetchRepositories("https://api.github.com/graphql",apiToken)