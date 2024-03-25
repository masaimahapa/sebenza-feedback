import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';

export default function FeedbackDetailPage({params}) {

    const { id } = useParams();
    console.log('params: '+id)
    const {data, isLoading, error} = useQuery({
        queryKey: ['feedback'],
        queryFn: () => fetch(`http://localhost:3333/feedback/${id}`).then(res => res.json())
      })
  
      if(isLoading) return <div>Loading...</div>
      if(error) return <div>Error fetcing data</div>
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Feedback Detail</h1>
        {/* Feedback detail content goes here */}
        <div className="text-left space-y-2">
          <p><strong>Title:</strong> {data.title}</p>
          <p><strong>Description:</strong> {data.description}</p>
          <p><strong>Status:</strong> {data.status}</p>
          {/* Additional details as needed */}
        </div>
      </div>
    </div>
  );
}
