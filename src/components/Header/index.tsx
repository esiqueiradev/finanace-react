import { useState } from 'react'
import Modal from 'react-modal';

import logoImage from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal} : HeaderProps) {
  return (
    <Container>
      <Content>
        <div>
          <img src={logoImage} alt="" />
        </div>
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}