import requests from "./index"

export const signin = (username: string, password: string) => {
    return requests.post("/api/signin", {
        username: username,
        password: password
    })
}