import { Data } from "./data";

export interface ApiResponse {
    statusCode: number;
    message: string;
    data: Data; 
  }