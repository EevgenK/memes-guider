export interface Meme {
  id: number;
  name: string;
  image: string;
  likes: number;
}

export const MemesDB: Meme[] = [
  {
    id: 1,
    name: 'Frontend VS Backend',
    image: '/images/front_vs_back.jpg',
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 2,
    name: 'Client VS Coder',
    image: '/images/client_coder.jpg',
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 3,
    name: 'Debugging',
    image: '/images/debug.jpg',
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 4,
    name: 'Full Stack',
    image: '/images/fullstack.jpg',

    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 5,
    name: 'People',
    image: '/images/people.jpg',
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 6,
    name: 'Morning',
    image: '/images/morning.jpg',
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 7,
    name: 'Security engine',
    image: '/images/security_engine.jpg',
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 8,
    name: 'kitty',
    image: '/images/cat.jpg',
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 9,
    name: 'The Earth',
    image: '/images/earth.jpg',
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 10,
    name: 'Security',
    image: '/images/security.jpg',
    likes: Math.floor(Math.random() * 100),
  },
];
