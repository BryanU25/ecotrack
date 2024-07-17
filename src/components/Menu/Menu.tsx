import { FC, useState } from 'react'
import { CiMenuKebab } from 'react-icons/ci'
import './menu-styles.css'

interface MenuProps {
  onEdit: () => void
  onDelete: () => void
  id?: number
}

const Menu: FC<MenuProps> = ({ onEdit, onDelete }) => {
  const [open, setOpen] = useState(false)

  const handlerOpenMenu = () => {
    setOpen(!open)
  }

  const onEditHandler = () => {
    if (onEdit) {
      onEdit()
    }
    setOpen(false)
  }

  const onDeleteHandler = () => {
    if (onDelete) {
      onDelete()
    }
    setOpen(false)
  }

  return (
    <button className="relative cursor-pointer" onBlur={() => setOpen(false)}>
      <CiMenuKebab onClick={() => handlerOpenMenu()} size={20} />
      {open ? (
        <ul className="list z-10">
          <li className="list-item" onClick={onEditHandler}>
            Editar
          </li>
          <li className="list-item" onClick={onDeleteHandler}>
            Eliminar
          </li>
        </ul>
      ) : null}
    </button>
  )
}

export default Menu
