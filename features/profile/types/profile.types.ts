export interface UserInfo {
  id: string;
  name: string;
  email: string;
  profile_picture: string;
  first_name: string;
  last_name: string;
  nick_name: string;
  gender: string;
  date_of_birth: string;
  nationality: string;
  location: string;
  alternative_email: string;
  phone_number: string;
  whatsapp_number: string;
}

export interface UpdateDetailPayload {
  first_name: string;
  last_name: string;
  nick_name?: string;
  gender?: string;
  date_of_birth?: string;
  nationality?: string;
  location?: string;
}

export interface UpdateContactPayload {
  email: string;
  alternative_email?: string;
  phone_number?: string;
  whatsapp_number?: string;
}