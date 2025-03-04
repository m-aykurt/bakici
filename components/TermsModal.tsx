import React from 'react';

interface TermsModalProps {
  modalId: string;
  title: string;
  content: string;
}

const TermsModal: React.FC<TermsModalProps> = ({ modalId, title, content }) => {
  return (
    <div className="modal fade" id={modalId} tabIndex={-1} aria-labelledby={`${modalId}Label`} aria-hidden="true">
      <div className="modal-dialog modal-dialog-scrollable modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`${modalId}Label`}>{title}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Anladım</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;