import requests from "."

export const adminHome = () => {
    return requests.post("/api/admin/", {
    })
}