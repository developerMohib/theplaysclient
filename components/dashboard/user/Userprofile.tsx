"use client";
import React, { useState } from 'react';

const Userprofile = () => {
    const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role : 'user',
    phone: '123-456-7890',
}
     const [form, setForm] = useState({
            name: user.name,
            email: user.email,
            phone: user.phone || '',
        })
    return (
        <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 p-6">
                <h3 className="mb-4 text-xl font-bold text-white">
                    Profile
                </h3>

                <input
                    className="mb-3 w-full rounded-xl border border-white/10 bg-black px-4 py-3"
                    value={form.name}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            name: e.target.value,
                        })
                    }
                />

                <input
                    className="mb-3 w-full rounded-xl border border-white/10 bg-black px-4 py-3"
                    value={form.email}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            email: e.target.value,
                        })
                    }
                />

                <input
                    className="w-full rounded-xl border border-white/10 bg-black px-4 py-3"
                    value={form.phone}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            phone: e.target.value,
                        })
                    }
                />

                <button className="mt-4 rounded-xl bg-white px-6 py-3 font-bold text-black">
                    Save
                </button>
            </div>
        </div>
    );
};

export default Userprofile;