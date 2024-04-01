

class HttpClient {

    constructor() {
    }

    async get(url, params, headers) {

        if (headers == null) {
            headers = new Headers();
            headers.append("Content-Type", "application/json")
        }

        let request = new Request(
            `${url}?${params}`,
            {
                headers: headers
            })

        console.debug(`Sending request to ${request.url}`)

        let response = await fetch(request)

        if (response.ok) {
            return response.json()
        } else {
            throw new Error("Response was not OK")
        }
    }

}

export { HttpClient }
