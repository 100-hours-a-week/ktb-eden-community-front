import { request } from "./request.js";

export async function getRequest(endpoint, includeAuth = false) {
  return request("GET", endpoint, {includeAuth});
}

export async function postRequest(endpoint, data, includeAuth = false) {
  return request("POST", endpoint, {includeAuth, body:data});
}

export async function patchRequest(endpoint, data, includeAuth = false) {
  return request("PATCH", endpoint, {includeAuth, body:data});
}

export async function deleteRequest(endpoint, includeAuth = false) {
  return request("DELETE", endpoint, {includeAuth});
}