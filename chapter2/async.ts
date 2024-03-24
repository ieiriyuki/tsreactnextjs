// compile error

function fetchFromServer(id: string): Promise<{success: boolean}> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({success: true})
        }, 100)
    })
}

async function asyncFunc(): Promise<string> {
    const result = await fetchFromServer('123')
    return `result: ${result.success}`
}

(async () => {
    const result = await asyncFunc()
    console.log(result)
})()

asyncFunc().then(result => console.log(result))
