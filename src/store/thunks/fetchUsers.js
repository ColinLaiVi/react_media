import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get('http://localhost:3005/users')

    return response.data
})

// pending代表剛發出請求
// fetchUsers.pending === 'users/fetch/pending'

// fulfilled代表請求成功
// fetchUsers.fulfilled === 'users/fetch/fulfilled'

// rejected代表請求失敗
// fetchUsers.rejected === 'users/fetch/rejected'

export { fetchUsers }