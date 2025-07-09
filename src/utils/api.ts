import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL

export const getTasks = async (): Promise<Task[]> => {
  try {
    const response = await axios.get(`${API_URL}/tasks`)
    return response.data
  } catch (error) {
    console.error('Error fetching tasks:', error)
    return []
  }
}

export const getStats = async (): Promise<Stats | null> => {
  try {
    const response = await axios.get(`${API_URL}/stats`)
    return response.data
  } catch (error) {
    console.error('Error fetching stats:', error)
    return null
  }
}

export const getSystemInfo = async () => {
  try {
    const response = await axios.get(`${API_URL}/info`)
    return response.data
  } catch (error) {
    console.error('Error fetching system info:', error)
    return null
  }
}