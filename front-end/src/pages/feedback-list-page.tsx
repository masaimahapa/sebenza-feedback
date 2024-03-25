import { useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import FeedbackItem from '../components/feedback-item';
import { useNavigate } from 'react-router-dom';

export default function FeedbackListPage() {
  const navigate = useNavigate();

  const {
    data = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ['feedback'],
    queryFn: () =>
      fetch('http://localhost:3333/feedback').then((res) => res.json()),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetcing data</div>;
  console.log(data);

  const newFeedback = data.filter((feedback) => feedback.status === 'new');
  const reviewedFeedback = data.filter((feedback) => feedback.status === 'reviewed');
  const resolvedFeedback = data.filter((feedback) => feedback.status === 'resolved');

  return (
    <div className="card bg-base-100 shadow-xl p-5 m-5">
      <h1 className="text-2xl font-bold">Feedback</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1 border p-4 space-y-5">
          <h2 className="text-lg font-semibold">New</h2>
          {newFeedback.length > 0 &&
            newFeedback.map((feedback: any, idx: number) => (
              <FeedbackItem
                feedback={feedback}
                key={idx}
                handleClick={() => navigate(`/feedback/${feedback.id}`)}
              />
            ))}
        </div>
        <div className="col-span-1 border p-4 space-y-5">
          <h2 className="text-lg font-semibold">Reviewed</h2>
          {reviewedFeedback.length > 0 &&
            reviewedFeedback.map((feedback: any, idx: number) => (
              <FeedbackItem
                key={idx}
                feedback={feedback}
                handleClick={() => navigate(`/feedback/${feedback.id}`)}
              />
            ))}
        </div>
        <div className="col-span-1 border p-4 space-y-5">
          <h2 className="text-lg font-semibold">Resolved</h2>
          {resolvedFeedback.length > 0 &&
            resolvedFeedback.map((feedback: any, idx: number) => (
              <FeedbackItem
                key={idx}
                feedback={feedback}
                handleClick={() => navigate(`/feedback/${feedback.id}`)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
