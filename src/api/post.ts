import requests from "./index"

export const posterList = (page: number = 1) => {
    return requests.post("/api/post", {
        page: page
    })
}

export const newPoster = (cont: string) => {
    return requests.post("/api/newPoster", {
        cont: cont
    })
}