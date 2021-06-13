import requests from "."

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

export const getPost = (pid: number) => {
    // return requests.post("/api/post", {
    //     pid: pid,
    // })
    return requests.post(`/api/post/${pid}`)
}