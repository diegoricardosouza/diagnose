import { useState } from 'react'
import { Link } from 'react-scroll'

import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import * as S from './styles'
import MediaMatch from 'components/MediaMatch'
import Logo from 'components/Logo'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <S.LogoWrapper>
        <a>
          <Logo padrao />
        </a>
      </S.LogoWrapper>

      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-90}
            >
              Início
            </Link>
          </S.MenuLink>

          <S.MenuLink>
            <Link to="vantagens" spy={true} smooth={true} offset={-90}>
              Vantagens
            </Link>
          </S.MenuLink>
          <S.MenuLink>
            <Link to="contato" spy={true} smooth={true} offset={-90}>
              Contato
            </Link>
          </S.MenuLink>
          <S.MenuLink>
            <Link to="demonstracao" spy={true} smooth={true} offset={-90}>
              Solicitar Demonstração
            </Link>
          </S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <S.MenuLink>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-75}
              onClick={() => setIsOpen(false)}
            >
              Início
            </Link>
          </S.MenuLink>
          <S.MenuLink>
            <Link
              to="vantagens"
              spy={true}
              smooth={true}
              offset={-75}
              onClick={() => setIsOpen(false)}
            >
              Vantagens
            </Link>
          </S.MenuLink>
          <S.MenuLink>
            <Link
              to="contato"
              spy={true}
              smooth={true}
              offset={-75}
              onClick={() => setIsOpen(false)}
            >
              Contato
            </Link>
          </S.MenuLink>
          <S.MenuLink>
            <Link
              to="demonstracao"
              spy={true}
              smooth={true}
              offset={-75}
              onClick={() => setIsOpen(false)}
            >
              Solicitar Demonstração
            </Link>
          </S.MenuLink>
        </S.MenuNav>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
