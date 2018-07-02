import React from 'react';
import Modal from 'react-modal'

Modal.setAppElement('#___gatsby')

const processWindowHash = () => {
  if (typeof window !== 'undefined') {
    const [hash] = window.location.hash.match(/\w+/) || [];
    return hash;
  }

  return null;
};

const HashModal = ({path, children, component}) => {
  return (
    <Modal 
      isOpen={path === processWindowHash()}
      onRequestClose={() => window.location.hash = ''}
      style={{
        overlay: { 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
        },
        content: {
          fontSize: '0.9rem',
          position: 'static',
          width: '35%',
          maxHeight: '70%',
          overflow: 'scroll',
          padding: '35px',
          borderWidth: 2,
          borderRadius: 4,
        },
      }}
    >
      {children}
    </Modal>
  );
}

export default HashModal;
