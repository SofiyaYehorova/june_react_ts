const baseURL = 'https://jsonplaceholder.typicode.com'

const users = '/users';
const urls = {
    users: {
        base: users,
        byId: (id: number): string => `${users}/${id}`
    }
}

export {
    urls,
    baseURL
}

