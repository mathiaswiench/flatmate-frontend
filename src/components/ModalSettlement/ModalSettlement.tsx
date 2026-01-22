import Modal from 'react-modal';
import type { Settlement } from '../../types';
import './ModalSettlement.css';

interface ModalSettlementProps {
  settlements: Settlement[];
  modalIsOpen: boolean;
  setModalIsOpen: (isOpen: boolean) => void;
}

export const ModalSettlement = ({
  settlements,
  modalIsOpen,
  setModalIsOpen,
}: ModalSettlementProps) => {
  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Settlement Modal"
      className="modal"
      overlayClassName="modal-overlay"
    >
      <h1 className="modal-title">Abrechnung</h1>
      {settlements.length > 0 ? (
        <div className="settlement-list">
          {settlements.map((settlement, index) => (
            <div key={index} className="settlement-item">
              <div className="settlement-info">
                <span className="settlement-names">
                  <span className="debtor">{settlement.debtor}</span>
                  {' zahlt an '}
                  <span className="creditor">{settlement.creditor}</span>
                </span>
              </div>
              <span className="settlement-amount">{settlement.amount} €</span>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-settlements">Keine Abrechnungen vorhanden</p>
      )}
      <button className="close-button" onClick={closeModal}>
        Schließen
      </button>
    </Modal>
  );
};
