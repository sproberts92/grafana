import { css } from '@emotion/css';
import React from 'react';

import { Modal, stylesFactory } from '@grafana/ui';

import { OnRowOptionsUpdate, RowOptionsForm } from './RowOptionsForm';

export interface RowOptionsModalProps {
  title: string;
  repeat?: string | null;
  onDismiss: () => void;
  onUpdate: OnRowOptionsUpdate;
  message?: string;
}

export const RowOptionsModal = ({ repeat, title, onDismiss, onUpdate, message }: RowOptionsModalProps) => {
  const styles = getStyles();
  return (
    <Modal isOpen={true} title="Row options" icon="copy" onDismiss={onDismiss} className={styles.modal}>
      {message && <p>{message}</p>}
      <RowOptionsForm repeat={repeat} title={title} onCancel={onDismiss} onUpdate={onUpdate} />
    </Modal>
  );
};

const getStyles = stylesFactory(() => {
  return {
    modal: css`
      label: RowOptionsModal;
      width: 500px;
    `,
  };
});
