const BASE_URL = `https://jsonplaceholder.typicode.com`

const api = async (url, options) => {
    const res = await fetch(BASE_URL + url, options)
    if (!res.ok) {
        throw new Error('Not Okay')
    }

    const data = await res.json()
    return data
}

export const getTodo = async (userId) => {
    const qs = new URLSearchParams({ userId })
    const url = `/todos?${qs}`
    return api(url)

}

export const createTodo = async (userId, title) => {
    const body = JSON.stringify({
        userId,
        title
    })
    return api('/todos', {
        method: 'POST',
        body,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },


    })
}

export const markDone = async (id) => {
    const body = JSON.stringify({
        completed:true,
    })
    return api(`/todos/${id}`, {
        method: 'PATCH',
        body,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })

}