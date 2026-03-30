import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

export default function Analysis() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get(`/resume/${id}`).then(res => setData(res.data));
  }, [id]);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h2>Score: {data.score}/100</h2>
    </div>
  );
}

<ul>
  {Object.entries(data.sections).map(([key, val]) => (
    <li key={key}>
      {key}: {val ? '✔' : '✖'}
    </li>
  ))}
</ul>