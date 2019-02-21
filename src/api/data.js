import axios from '@/libs/axios'

export const register = data => axios.post('/v1/token')(data)
export const login = data => axios.post('/v1/token')(data)
export const getAllHabit = data => axios.get('/v1/habit')(data)
export const postHabit = data => axios.post('/v1/habit')(data)