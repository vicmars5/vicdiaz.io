import { useEffect } from 'react'
/* global fetch:true */

export default function useViewEffect (id) {
  useEffect(() => {
    fetch(`/api/view?id=${encodeURIComponent(id)}`)
      .then()
      .catch(console.error)
  }, [id])
}
