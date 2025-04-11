export const httpCodes = {
  // ✅ Success Responses
  200: "OK - The request was successful.",
  201: "Created - The resource was successfully created.",
  202: "Accepted - The request has been accepted for processing.",
  204: "No Content - The request was successful but has no response body.",

  // ❌ Client Error Responses
  400: "Bad Request - Invalid request syntax or parameters.",
  401: "Unauthorized - Authentication is required to access this resource.",
  403: "Forbidden - You don’t have permission to access this resource.",
  404: "Not Found - The requested resource could not be found.",
  405: "Method Not Allowed - The HTTP method is not allowed for this resource.",
  408: "Request Timeout - The server took too long to respond.",
  409: "Conflict - The request conflicts with the current state of the resource.",
  410: "Gone - The resource is permanently removed.",
  415: "Unsupported Media Type - The request format is not supported.",
  422: "Unprocessable Entity - Validation failed due to incorrect input.",
  429: "Too Many Requests - Rate limit exceeded, try again later.",

  // 🔥 Server Error Responses
  500: "Internal Server Error - An unexpected error occurred on the server.",
  502: "Bad Gateway - Received an invalid response from the upstream server.",
  503: "Service Unavailable - The server is overloaded or under maintenance.",
  504: "Gateway Timeout - The server took too long to get a response.",
};
