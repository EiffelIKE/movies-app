import { useState } from 'react';

export const useActiveGenre = () => {
  const [activeGenre, setActiveGenre] = useState<number>(28);

  const handleActiveGenre = (id: number) => {
    setActiveGenre(id);
  };

  return { activeGenre, handleActiveGenre };
};
