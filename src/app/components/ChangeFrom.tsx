'use client';
import { Button, Form, Input } from '@heroui/react';
import { useState } from 'react';
import { Meme } from '../utils/memes';
import validateForm from '../utils/validateForm';

const inputStyles = {
  mainWrapper: 'w-full flex items-center gap-4',
  inputWrapper: 'focus:outline-none focus:ring-0',
  input: 'focus:outline-none',
  label: 'w-18',
};
export interface ChangeFromProps {
  meme: Meme;
  onClose: () => void;
  handleSave: (formData: Record<string, FormDataEntryValue>) => void;
}
const ChangeFrom = ({ meme, onClose, handleSave }: ChangeFromProps) => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget));
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    handleSave(formData);

    onClose();
  };

  return (
    <>
      <Form onSubmit={onSubmit} validationErrors={errors}>
        <Input
          classNames={inputStyles}
          isRequired
          defaultValue={meme.name}
          label="Name"
          name="name"
          radius="lg"
          type="text"
          minLength={3}
          maxLength={100}
          labelPlacement="outside-left"
        />
        <Input
          classNames={inputStyles}
          isRequired
          defaultValue={meme.image}
          label="Image"
          name="image"
          radius="lg"
          type="url"
          labelPlacement="outside-left"
        />
        <Input
          classNames={inputStyles}
          isRequired
          defaultValue={String(meme.likes)}
          label="Likes"
          name="likes"
          radius="lg"
          type="number"
          min={0}
          max={99}
          labelPlacement="outside-left"
        />

        <div className="w-full flex justify-end gap-4 mt-6">
          <Button color="danger" variant="flat" onPress={onClose} type="button">
            Close
          </Button>
          <Button color="secondary" type="submit">
            Edit
          </Button>
        </div>
      </Form>
    </>
  );
};

export default ChangeFrom;
