import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function AddFeedbackPage() {
    const queryClient = useQueryClient();
  const navigate = useNavigate();

    const [feedback, setFeedback] = React.useState({ title: '', description: '' });

    const mutation = useMutation({
        mutationFn: (feedback: any) => fetch('http://localhost:3333/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(feedback)
        }).then(res => res.json()),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['feedback'] })
            toast('Feedback added successfully');
            navigate('/');


        }
    })


    const handleSubmit = (e: any) => {
        e.preventDefault();

        mutation.mutate({ ...feedback , cell_number: '0821234567'});
    }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Add Feedback</h1>
        <p>Tell us about your experience using Sebenza wifi.</p>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            onChange={(e) => setFeedback({ ...feedback, title: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea rows="4" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
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
