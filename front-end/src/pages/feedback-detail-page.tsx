import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { Feedback } from '../interfaces/feedback-interface';

export default function FeedbackDetailPage() {
    const { id } = useParams();
    const [editMode, setEditMode] = useState(false);
    const [feedback, setFeedback] = useState({ title: '', description: '', status: '', user_id:0 });
  const navigate = useNavigate();


    const { data, isLoading , isError } = useQuery({
        queryKey: ['feedback', id],
        queryFn: () => fetch(`http://localhost:3333/feedback/${id}`).then(res => res.json()),
    });

    const mutation = useMutation({
        mutationFn: (newData: Feedback) => fetch(`http://localhost:3333/feedback/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newData)
        }).then(res => res.json()),
        onSuccess: () => {
            toast('Feedback updated successfully');
            navigate('/');
        }
    }

    );

    const deleteMutation = useMutation({
        mutationFn: () => fetch(`http://localhost:3333/feedback/${id}`, {
            method: 'DELETE',
        }).then(res => res.json()),
        onSuccess: () => {
            toast('Feedback deleted successfully');
            navigate('/');
        }
    }

    );

    useEffect(() => {
        if (data) {
            setFeedback({ title: data.title, description: data.description, status: data.status, user_id: data.user_id });
        }
    }, [data]);

    const handleEdit = () => setEditMode(true);

    const handleCancel = () => {
        setEditMode(false);
        if (data) {
            setFeedback({ title: data.title, description: data.description, status: data.status, user_id: data.user_id  });
        }
    };

    const handleSave = () => {

        mutation.mutate(feedback);
        setEditMode(false);
    };

    const handleDelete = () => {
        deleteMutation.mutate();
    
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFeedback(prev => ({ ...prev, [name]: value }));
    };



    if (isLoading) return <div>Loading...</div>;

    if(isError) return <div>Something went wrong...</div>


    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="container max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg">
                <h1 className="text-2xl font-bold text-center mb-4">Feedback Detail</h1>
                <div className="text-left space-y-2">
                    {editMode ? (
                        <>
                            <input
                                name="title"
                                className="input input-bordered w-full mb-4"
                                value={feedback.title}
                                onChange={handleChange}
                            />
                            <textarea
                                name="description"
                                className="textarea textarea-bordered w-full mb-4"
                                value={feedback.description}
                                onChange={handleChange}
                            />
                            <select
                                name="status"
                                className="select select-bordered w-full mb-4"
                                value={feedback.status}
                                onChange={handleChange}
                            >
                                <option value="new">New</option>
                                <option value="reviewed">Reviewed</option>
                                <option value="resolved">Resolved</option>
                            </select>
                            <button className="btn btn-primary" onClick={handleSave}>Save</button>
                            <button className="btn btn-ghost" onClick={handleCancel}>Cancel</button>
                        </>
                    ) : (
                        <>
                            <p><strong>Title:</strong> {feedback.title}</p>
                            <p><strong>Description:</strong> {feedback.description}</p>
                            <p><strong>Status:</strong> {feedback.status}</p>
                            <button className="btn btn-primary" onClick={handleEdit}>Edit</button>
                            <button className="btn btn-error" onClick={handleDelete}>Delete</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
