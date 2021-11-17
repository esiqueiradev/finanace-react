import ReactModal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import closeIcon from "../../assets/close.svg";
import incomeIcon from "../../assets/income.svg";
import outcomeIcon from "../../assets/outcome.svg";
import { useState } from "react";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [transactionType, setTransactionType] = useState<"deposit" | "withdraw">("deposit");
  
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeIcon} alt="Close Modal" />
      </button>

      <Container>
        <h2>Cadastrar transações</h2>

        <input type="text" placeholder="Título" />
        <input type="number" placeholder="Valor" />
        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setTransactionType("deposit")}
            isActive={transactionType === "deposit"}
            activeColor="green"
          >
            <img src={incomeIcon} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setTransactionType("withdraw")}
            isActive={transactionType === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeIcon} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input type="text" placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </ReactModal>
  )
}