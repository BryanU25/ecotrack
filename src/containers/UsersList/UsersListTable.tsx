import { FC } from "react";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import Menu from "@/components/Menu/Menu";

import { toast } from "sonner";

interface User {
  name: string;
  email: string;
  cedula: string;
  phoneNumber: string;
  role: string;
  key: string | number | null | undefined;
}

const UsersListTable: FC<{
  users: User[];
  totalPages: number;
  currentPage: number;
  loading?: boolean;
  // eslint-disable-next-line no-unused-vars
  onPageChange: (page: number) => void;
}> = ({ users, totalPages, onPageChange, currentPage, loading }) => {
  return (
    <div className="w-full overflow-auto">
      <Table
        loading={loading}
        data={users}
        headers={[
          {
            dataIndex: "name",
            key: "name",
            title: "Nombre Estudiante",
          },
          {
            dataIndex: "email",
            key: "email",
            title: "Correo Electrónico",
          },
          {
            dataIndex: "cedula",
            key: "cedula",
            title: "Cedula",
          },
          {
            dataIndex: "phoneNumber",
            key: "phoneNumber",
            title: "Celular",
          },
          {
            dataIndex: "role",
            key: "role",
            title: "Rol",
          },
          {
            dataIndex: "key",
            key: "key",
            render: (key) => (
              <Menu
                id={key}
                onEdit={() => {
                  toast("Inserta la funcionalidad para editar");
                }}
                onDelete={() => {
                  toast("Inserta la funcionalidad para eliminar");
                }}
              />
            ),
            title: "Acciones",
          },
        ]}
      />

      <Pagination
        totalPages={totalPages}
        onPageChange={onPageChange}
        currentPage={currentPage}
        position="right"
      />
    </div>
  );
};

export default UsersListTable;
