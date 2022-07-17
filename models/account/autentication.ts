export interface RequestTokenResultModel {
  success: boolean;
  expires_at: string;
  request_token: string;
}

export interface SessionResutlModel {
  success: boolean;
  session_id: string;
}
