//ライブラリ
import { useState, useEffect } from 'react';
//API
import { getUsers } from '../api/data';
//タイプ
import { UserType } from '../Type';

export const BrowsePage = () => {
  const [Data, setData] = useState<any | null>(null);
  useEffect(() => {
    getUsers().then((data) => setData(data));
  }, []);

  return (
    <p>{JSON.stringify(Data)}</p>
  )
};