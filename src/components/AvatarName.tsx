import { FC } from 'react'
import Avatar from './Avatar'

type AvatarNameProps = {
  name: string
  description: string
  image?: string
}

const AvatarName: FC<AvatarNameProps> = ({ description, image, name }) => {
  return (
    <div className="flex items-center gap-2 py-2">
      {image ? (
        <Avatar type="image" src={image} size="sm" />
      ) : (
        <Avatar type="text" name={name} size="sm" />
      )}
      <div className="flex flex-col">
        <p className="text-sm font-semibold leading-[21px] text-black">
          {name}
        </p>
        <p className="text-xs leading-[18px] text-darkGray">{description}</p>
      </div>
    </div>
  )
}

export default AvatarName
