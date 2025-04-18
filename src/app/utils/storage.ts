import { Meme } from './memes';
import normalizedHttpLink from './normalizedHttpLink';

export const getMemes = (): Meme[] => {
  if (typeof window === 'undefined') return [];
  const memes = localStorage.getItem('memes');
  return memes ? JSON.parse(memes) : [];
};

export const saveMemes = (memes: Meme[]): void => {
  memes.map((meme) =>
    !meme.image.includes('http')
      ? (meme.image = normalizedHttpLink(meme.image))
      : meme,
  );

  if (typeof window !== 'undefined') {
    localStorage.setItem('memes', JSON.stringify(memes));
  }
};
