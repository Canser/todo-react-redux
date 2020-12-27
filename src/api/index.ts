type RequestType = {
  url: string;
  method?: "GET" | "POST" | "PUT" | "PATCH" | "HEAD" | "OPTIONS" | "DELETE";
  data?: object;
  headers?: Record<string, string>;
};

const API_URL = process.env.REACT_APP_API_URL;

/**
 * Make a fetch request.
 *
 * @param url
 * @param method
 * @param data
 * @param headers
 */
const makeRequest = ({
  url,
  method = "GET",
  data,
  headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
}: RequestType) => {
  return fetch(`${API_URL}/api/${url}`, {
    method,
    body: JSON.stringify(data),
    headers: headers,
  }).then((response) => {
    if (response.status === 204) {
      return;
    }

    return response?.json() ?? response.text();
  });
};

export const getTodos = () => {
  return makeRequest({ url: "todos" });
};

export const addTodo = (content: string) => {
  return makeRequest({ url: "todos", method: "POST", data: { content } });
};

export const updateTodo = (id: number, data: object) => {
  return makeRequest({ url: `todos/${id}`, method: "PUT", data });
};

export const deleteTodo = (id: number) => {
  return makeRequest({
    url: `todos/${id}`,
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
};
