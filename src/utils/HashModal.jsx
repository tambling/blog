import React from 'react';
import Modal from 'react-modal'

Modal.setAppElement('#___gatsby')

const processWindowHash = () => {
  const [hash] = window.location.hash.match(/\w+/) || [];
  return hash;
};

const HashModal = ({path, children, component}) => {
  return (
    <Modal 
      isOpen={path === processWindowHash()}
      onRequestClose={() => window.history.back()}
      style={{
        overlay: { 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
        },
        content: {
          position: 'static',
          height: '60%',
          width: '40%',
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
