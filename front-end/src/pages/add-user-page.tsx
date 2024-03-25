import { useMutation, useQueryClient } from '@tanstack/react-query';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { UserInterface } from '../interfaces/user-interface';

export default function AddUserPage() {
    const queryClient = useQueryClient();
  const navigate = useNavigate();

    const [user, setUser] = useState<UserInterface>({ name: '', cell_number: '' });

    const mutation = useMutation({
        mutationFn: (data: UserInterface) => fetch('http://localhost:3333/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json()),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] })
            toast('User added successfully');
            navigate('/');


        }
    })


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        mutation.mutate(user);
    }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Add User</h1>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">name</label>
            <input type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Cell Number</label>
            <input className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            onChange={(e) => setUser({ ...user, cell_number: e.target.value })}
            />
          </div>
          <div className="flex justify-end">
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Create User</button>
          </div>
        </form>
      </div>
    </div>
  );
}
