import React from 'react';
import Modal from 'react-modal'

import * as styles from './index.module.css'

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
      shouldFocusAfterRender={false}
      className={styles.modal}
      style={{
        overlay: { 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
        },
      }}
    >
      {children}
    </Modal>
  );
}

export default HashModal;
