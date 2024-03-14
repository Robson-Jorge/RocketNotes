import { FiZoomIn, FiZoomOut, FiSave, FiCamera } from 'react-icons/fi'

import AvatarEditor from 'react-avatar-editor'
import { Actions, Container } from './styles'
import { useState } from 'react'

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export const EditableAvatar = ({ avatarUrl, setAvatarFile }) => {
  const [image, setImage] = useState(avatarUrl)
  const [scale, setScale] = useState(1)
  const [isEditing, setIsEditing] = useState(false)
  const [editor, setEditor] = useState(null)

  const handleChangeAvatar = (e) => {
    const file = e.target.files[0]

    if (file) {
      setImage(file)
      setIsEditing(true)
    }
  }

  const handleZoomIn = () => {
    setScale((prevScale) => prevScale + 0.1)
  }

  const handleZoomOut = () => {
    const newScale = Math.max(1, scale - 0.1)
    setScale(newScale)
  }

  const handleScaleChange = (e) => {
    setScale(parseFloat(e.target.value))
  }

  const handleAvatarSave = () => {
    if (editor) {
      const canvas = editor.getImageScaledToCanvas()

      canvas.toBlob((blob) => {
        if (blob) {
          const file = new File([blob], 'avatar.png', { type: 'image/png' })
          setAvatarFile(file)
        }
      }, 'image/png')

      setIsEditing(false)
    }
  }

  return (
    <Container>
      <div>
        <label htmlFor="avatar">
          <FiCamera />
        </label>
        <input type="file" id="avatar" onChange={handleChangeAvatar} />
        {isEditing ? (
          <AvatarEditor
            ref={(ref) => setEditor(ref)}
            image={image}
            width={186}
            height={186}
            color={[20, 20, 20, 0.6]}
            scale={Number(scale)}
            border={0}
          />
        ) : (
          <img
            src={avatarUrl || avatarPlaceholder}
            onError={(e) => (e.target.src = avatarPlaceholder)}
            alt="Avatar"
          />
        )}
      </div>

      <Actions isVisible={isEditing}>
        <FiZoomIn onClick={handleZoomIn} />
        <FiZoomOut onClick={handleZoomOut} />
        <input
          type="range"
          value={scale}
          min="1"
          max="4"
          step="0.05"
          onChange={handleScaleChange}
        />
        <FiSave onClick={handleAvatarSave} />
      </Actions>
    </Container>
  )
}
