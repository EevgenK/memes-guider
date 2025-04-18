'use client';
import React, { useEffect, useState } from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Link,
  Button,
  useDisclosure,
} from '@heroui/react';
import { Meme } from '../utils/memes';
import { getMemes, saveMemes } from '../utils/storage';

import ChangeModal from './ChangeModal';

const MemesTable = () => {
  const [memes, setMemes] = useState<Meme[]>([]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selected, setSelected] = useState<Meme | null>(null);
  useEffect(() => {
    const stored = getMemes();
    if (stored.length) setMemes(stored);
    else {
      import('../utils/memes').then(({ MemesDB }) => {
        setMemes(MemesDB);
        saveMemes(MemesDB);
      });
    }
  }, []);

  const openEdit = (meme: Meme) => {
    setSelected(meme);
    onOpen();
  };
  const handleSave = (formData: Record<string, FormDataEntryValue>) => {
    if (!selected) return;
    console.log('Form data from table:', formData);
    const updated = memes.map((m) =>
      m.id === selected.id ? { ...m, ...formData } : m,
    );
    setMemes(updated);
    saveMemes(updated);
    setSelected(null);
  };

  return (
    <div className="flex flex-col gap-3 overflow-hidden rounded-md h-screen">
      <Table
        isVirtualized={true}
        maxTableHeight={700}
        rowHeight={40}
        radius="lg"
        classNames={{
          base: 'border-separate border-spacing-0 overflow-x-auto ',
          wrapper: 'bg-primary rounded-b-lg h-full',
          thead:
            'bg-foreground [&>tr:last-child]:hidden [&>tr:first-child>th:first-child]:rounded-bl-none [&>tr:first-child>th:last-child]:rounded-br-none',
          td: `border-r border-l border-secondary px-4 py-2 `,
          th: `border-b border-secondary text-secondary px-4 py-4 text-center`,
          tr: `border-b border-secondary `,
        }}
        aria-label="Example static collection table"
        color="secondary"
        defaultSelectedKeys={['2']}
        selectionMode="single"
      >
        <TableHeader>
          <TableColumn>ID</TableColumn>
          <TableColumn>NAME</TableColumn>
          <TableColumn>IMAGE</TableColumn>
          <TableColumn>LIKES</TableColumn>
          <TableColumn>ACTIONS</TableColumn>
        </TableHeader>

        <TableBody>
          {memes.map((meme) => (
            <TableRow key={meme.id}>
              <TableCell>{meme.id}</TableCell>
              <TableCell>{meme.name}</TableCell>
              <TableCell>
                <Link
                  className="text-inherit block truncate max-w-[150px] sm:max-w-full sm:whitespace-normal"
                  target="blank"
                  href={meme.image}
                >
                  {meme.image}
                </Link>
              </TableCell>
              <TableCell>{meme.likes}</TableCell>
              <TableCell className="flex justify-center">
                <Button
                  onPress={() => openEdit(meme)}
                  color="secondary"
                  className="text-foreground "
                >
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ChangeModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        meme={selected}
        handleSave={handleSave}
      />
    </div>
  );
};

export default MemesTable;
