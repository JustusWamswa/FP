import axios from "axios"

const url = import.meta.env.VITE_API_URL
const token = import.meta.env.VITE_AUTH_TOKEN

// API requests for Project Loading please refer to API documentation

const api = axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 50000,
})

api.interceptors.request.use(
    (config) => {
        // const token = localStorage.getItem("userId")
        config.headers["Authorization"] = `Bearer ${token}`
        return config
    },
    (error) => {
        console.log("api error: ", error)
        const statusCode = error.response ? error.response.status : null
        return Promise.reject(error)
    }
)

export const createAppointment = async (appointmentDetails) => {
    return await api.post(`api/v1/appointments`, appointmentDetails)
}

export const getAppointments = async () => {
    return await api.get(`api/v1/appointments`)
}

export const updateAppointment = async (id, appointmentDetails) => {
    return await api.put(`api/v1/appointments/${id}`, appointmentDetails)
}

export const deleteAppointment = async (id) => {
    return await api.delete(`api/v1/appointments/${id}`)
}

export const getMessages = async () => {
    return await api.get(`api/v1/messages`)
}

export const sendMessage = async (userMessage) => {
    return await api.post(`api/v1/messages`, { userMessage })
}

export const deleteMessage = async (id) => {
    return await api.delete(`api/v1/messages/${id}`)
}

export const getRecords = async () => {
    return await api.get(`api/v1/records`)
}

export const createRecord = async (formData) => {
    return await api.post(`/api/v1/records`, formData, {
        headers: {'Content-Type': 'multipart/form-data'},
    })
}

export const updateRecord = async (id, recordDetails) => {
    return await api.put(`api/v1/records/${id}`, recordDetails)
}

export const deleteRecord = async (id) => {
    return await api.delete(`api/v1/records/${id}`)
}
