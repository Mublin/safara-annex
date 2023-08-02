import React from 'react'

const errorHandle = (error: any) => {
  return (
    error && error.response && error.response.data ? error.response.data.message : error.response.data
  )
}

export default errorHandle