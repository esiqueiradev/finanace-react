import ReactModal from "react-modal";
import { Container, TransactionTypeContainer } from "./styles";
import closeIcon from "../../assets/close.svg";
import incomeIcon from "../../assets/income.svg";
import outcomeIcon from "../../assets/outcome.svg";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
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
          <button
            type="button"
          >
            <img src={incomeIcon} alt="Entrada" />
            <span>Entrada</span>
          </button>
          <button
            type="button"
          >
            <img src={outcomeIcon} alt="Saída" />
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>
        <input type="text" placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </ReactModal>
  )
}