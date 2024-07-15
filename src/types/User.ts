import { Role } from "./Role";

type Details = Omit<UserDetails, "id" | "created_at" | "updated_at">;

interface UserDetails {
  id?: number;
  nombre: string;
  apellido: string;
  dni: string;
  genero: string;
  celular: string;
  email: string;
  pais: string;
  ciudad: string;
  notas_adicionales: string;
  username: string;
  password: string;
  created_at?: string;
  updated_at?: string;
}

type User = {
  id?: string | null | number;
  usuario: UserDetails;
  rol: Role;
};

type Auth = {
  email: string;
  password: string;
};

export type { User, Auth, UserDetails };
