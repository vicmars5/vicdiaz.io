import useSWR from 'swr'
/* global fetch:true */

// send request to get views
export default function useFetchView (id) {
  const { data, error } = useSWR(`/api/view?id=${encodeURIComponent(id)}`, async (path) => {
    const res = await fetch(path)
    const { total } = await res.json()
    console.log('res', res, total)
    return total
  })
  return { views: data, error }
}
