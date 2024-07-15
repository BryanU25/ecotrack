import { openModal } from '@/redux/features/modalSlice'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { Menu, Pagination, Table } from 'ui'
import { MODAL_TYPES } from '../Modal/ModalTypes'
import useUsers from '@/hooks/useUsers'

interface User {
  name: string
  email: string
  cedula: string
  phoneNumber: string
  role: string
  key: string | number | null | undefined
}

const UsersListTable: FC<{
  users: User[]
  totalPages: number
  currentPage: number
  loading?: boolean
  // eslint-disable-next-line no-unused-vars
  onPageChange: (page: number) => void
}> = ({ users, totalPages, onPageChange, currentPage, loading }) => {
  const { deleteUser } = useUsers()

  const dispatch = useDispatch()
  const openCreateUserModal = (userId: number) => {
    dispatch(
      openModal({
        type: MODAL_TYPES.CREATE_USER_MODAL,
        data: {
          userId
        }
      })
    )
  }

  const openDeleteUserModal = (userId: number) => {
    dispatch(
      openModal({
        type: MODAL_TYPES.CONFIRM_MODAL,
        data: {
          type: 'warning',
          message: '¿Estás seguro que deseas eliminar este usuario?',
          description:
            'Una vez eliminado se eliminará toda la información relacionada a este usuario. Esta acción no se puede deshacer.',
          onOk: () => {
            deleteUser(userId)
          }
        }
      })
    )
  }

  return (
    <div className="w-full overflow-auto">
      <Table
        loading={loading}
        data={users}
        headers={[
          {
            dataIndex: 'name',
            key: 'name',
            title: 'Nombre Estudiante'
          },
          {
            dataIndex: 'email',
            key: 'email',
            title: 'Correo Electrónico'
          },
          {
            dataIndex: 'cedula',
            key: 'cedula',
            title: 'Cedula'
          },
          {
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
            title: 'Celular'
          },
          {
            dataIndex: 'role',
            key: 'role',
            title: 'Rol'
          },
          {
            dataIndex: 'key',
            key: 'key',
            render: (key) => (
              <Menu
                id={key}
                onEdit={() => {
                  openCreateUserModal(key)
                }}
                onDelete={() => {
                  openDeleteUserModal(key)
                }}
              />
            ),
            title: 'Acciones'
          }
        ]}
      />

      <Pagination
        totalPages={totalPages}
        onPageChange={onPageChange}
        currentPage={currentPage}
        position="right"
      />
    </div>
  )
}

export default UsersListTable
