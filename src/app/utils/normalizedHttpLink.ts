const normalizedHttpLink = (path: string) => {
  const BASE_URL =
    typeof window !== 'undefined'
      ? window.location.origin
      : 'https://memes-guide-production.up.railway.app';
  return BASE_URL + path;
};

export default normalizedHttpLink;
