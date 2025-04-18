'use client';
import { useEffect, useState } from 'react';

import { getMemes } from '../utils/storage';
import { Meme } from '../utils/memes';

import MemeCard from './MemeCard';

export default function MemeList() {
  const [memes, setMemes] = useState<Meme[]>([]);

  useEffect(() => {
    const stored = getMemes();
    if (stored.length) setMemes(stored);
  }, []);

  return (
    <ul className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {memes.map((meme) => (
        <MemeCard
          key={meme.id}
          id={meme.id}
          name={meme.name}
          image={meme.image}
          likes={meme.likes}
        />
      ))}
    </ul>
  );
}
