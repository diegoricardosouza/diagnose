import { useState, InputHTMLAttributes } from 'react'
import * as S from './styles'

export type TextFieldProps = {
  onInputChange?: (value: string) => void
  initialValue?: string
  error?: string
  placeholder?: string
  color: 'normal' | 'black'
  datajs?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  name,
  initialValue = '',
  error,
  placeholder,
  color = 'normal',
  datajs,
  onInputChange,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInputChange && onInputChange(newValue)
  }

  return (
    <S.Wrapper error={!!error}>
      <S.InputWrapper color={color}>
        <S.Input
          type="text"
          onChange={onChange}
          value={value}
          name={name}
          placeholder={placeholder}
          data-js={datajs}
          {...(name ? { id: name } : {})}
          {...props}
        />
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default TextField
