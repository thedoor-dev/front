import requests from "."

export const signin = (username: string, password: string) => {
    return requests.post("/api/signin", {
        name: username,
        pswd: password
    })
}