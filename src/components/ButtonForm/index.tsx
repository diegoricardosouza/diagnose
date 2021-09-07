import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonFormProps = {
  as?: React.ElementType
} & ButtonTypes

const ButtonForm: React.ForwardRefRenderFunction<
  S.WrapperProps,
  ButtonFormProps
> = ({ children, ...props }, ref) => (
  <S.Wrapper ref={ref} {...props}>
    {children}
  </S.Wrapper>
)

export default forwardRef(ButtonForm)
