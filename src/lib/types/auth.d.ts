declare interface User extends DatabaseProperties {
  token: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  phone: string;
  photo: string;
  role: string;
  wishlist: [];
  addresses: [];
}

declare interface LoginRegisterResponse {
  user: User;
  token: string;
}
