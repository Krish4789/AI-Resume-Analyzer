import { useEffect, useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [resumes, setResumes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/resumes').then(res => setResumes(res.data));
  }, []);

  return (
    <div>
      <h2>My Resumes</h2>

      {resumes.map(r => (
        <div key={r._id} onClick={() => navigate(`/analysis/${r._id}`)}>
          {r.filename} — Score: {r.score}/100
        </div>
      ))}
    </div>
  );
}