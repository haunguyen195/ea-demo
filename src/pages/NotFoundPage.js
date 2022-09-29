import React, { useEffect } from 'react'
import { setToLS } from '../utils/storage'

const NotFoundPage = () => {
  useEffect(() => {
    setToLS('theme', '')
  }, [])


  return (
    <div>Not found</div>
  )
}

export default NotFoundPage