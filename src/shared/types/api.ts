export interface ApiError {
  code: string;
  message: string;
  details?: any;
  stack?: string;
}

export interface ApiResponse<T> {
  success: boolean,
  data: T,
  message?: string,
  error?: ApiError
}