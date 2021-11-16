import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

export function App() {
  const [newTransactionModalOpen, setNewTransactionModalOpen] = useState(false);

  const handleOpenNewTransactionModal = () => {
    setNewTransactionModalOpen(true);
  }

  const handleCloseNewTransactionModal = () => {
    setNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <Modal
        isOpen={newTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Nova Transação</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}
