import { useMutation, useQuery } from '@tanstack/react-query';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { UserInterface } from '../interfaces/user-interface';
import { Feedback } from '../interfaces/feedback-interface';

export default function AddFeedbackPage() {
  const navigate = useNavigate();

    const [feedback, setFeedback] = React.useState({ title: '', description: '', user_id:0 });

    const mutation = useMutation({
        mutationFn: (feedback: Feedback) => fetch('http://localhost:3333/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(feedback)
        }).then(res => res.json()),
        onSuccess: () => {
            toast('Feedback added successfully');
            navigate('/');
        }
    })

    const usersQuery = useQuery({
        queryKey: ['feedback'],
        queryFn: () =>
          fetch('http://localhost:3333/users').then((res) => res.json()),
      });
    

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!feedback.user_id){
          toast.error("Please select a user before submitting.")
          return;
        }

        mutation.mutate(feedback);
    }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Add Feedback</h1>
        <p>Tell us about your experience using Sebenza wifi.</p>
        <form>
            <div className='the-dropdown'>
            <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">User</span>
  </div>
  <select className="select select-bordered" defaultValue={''} onChange={(e) => {
        setFeedback({ ...feedback, user_id: parseInt(e.target.value) })
    }}>
    <option  value={''} disabled >Select a User</option>
    {usersQuery.data?.map((user: UserInterface, idx: number) => (
        <option key={idx} value={user.id}>{user.name}</option>
    ))}

  </select>
  
</label>
            </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            onChange={(e) => setFeedback({ ...feedback, title: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea rows={4} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            onChange={(e) => setFeedback({ ...feedback, description: e.target.value })}
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit Feedback</button>
          </div>
        </form>
      </div>
    </div>
  );
}
