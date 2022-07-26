import axios from 'axios'
const url = 'http://localhost:5000/api/tasks/'

export const getAllTasksApi = async (token: any) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    const response = await axios.get(url, config)
    return response.data
}

export const addNewTaskApi = async (name: string, token: any) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    const response = await axios.post(url, {name}, config)
    return response.data
}

export const toggleTaskStatus = async (id: string, done: boolean, token: any) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    const response = await axios.patch(`${url}toggle-status/${id}`, {id, done}, config)
    return response.data
}

export const editTaskName = async (id: string, name: string, token: any) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    const response = await axios.patch(`${url}edit-name/${id}`, {id, name}, config)
    return response.data
}

export const deleteTask = async (id: string, token: any) =>  {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    const response = await axios.delete(`${url}delete/${id}`, config)
    return response.data
} 