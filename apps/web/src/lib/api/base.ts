const API_BASE_URL = import.meta.env.VITE_API_BASE_URL.replace(/\/+$/, '')

type ApiUrl = `/${string}/`

export const fetchApi = async <T>(url: ApiUrl, options?: RequestInit): Promise<T> => {
  const fullUrl = `${API_BASE_URL}${url}`
  const response = await fetch(fullUrl, options)

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return response.json() as Promise<T>
}
