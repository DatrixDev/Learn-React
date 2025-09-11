const API_DOMAIN = "http://localhost:3001/";

async function handleResponse(response) {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const text = await response.text();    
  return text ? JSON.parse(text) : null;  
}

export const get = async (path) => {
  const response = await fetch(API_DOMAIN + path);
  return handleResponse(response);
};

export const post = async (path, options) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });
  return handleResponse(response);
};

export const del = async (path, id) => {
  const response = await fetch(`${API_DOMAIN}${path}/${id}`, {
    method: "DELETE",
  });
  return handleResponse(response); 
};

export const patch = async (path, options) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });
  return handleResponse(response);
};
