'use client';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalProps,
} from '@heroui/react';
import { Meme } from '../utils/memes';

import ChangeFrom from './ChangeFrom';
interface ChangeModalProps {
  isOpen: boolean;
  onOpenChange: ModalProps['onOpenChange'];
  meme: Meme | null;
  handleSave: (formData: Record<string, FormDataEntryValue>) => void;
}
const ChangeModal = ({
  isOpen,
  onOpenChange,
  meme,
  handleSave,
}: ChangeModalProps) => {
  if (!meme) return null;

  return (
    <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
      <ModalContent className="bg-primary">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 ">
              Edit Meme
            </ModalHeader>
            <ModalBody>
              <ChangeFrom
                onClose={onClose}
                meme={meme}
                handleSave={handleSave}
              />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
export default ChangeModal;
