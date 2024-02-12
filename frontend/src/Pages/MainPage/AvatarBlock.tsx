import { useEffect, useState } from 'react';
import s from './AvatarBlock.module.scss';

type Props = {};

export default function AvatarBlock({}: Props) {
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    fetch('http://192.168.43.216:3002/github-avatar/lanneq-dev')
      .then(response => response.json())
      .then(data => {
        setAvatarUrl(data.avatar_url);                
      })
      .catch(error => console.error('Error fetching avatar:', error));
  }, []);

  return (
    <div className={s.container}>
      {avatarUrl && <div style={{ backgroundImage: `url(${avatarUrl})`}} className={s.avatar} />}

    </div>
  );
}
