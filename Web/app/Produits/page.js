"use client";
import React, { useEffect, useState } from 'react';
import BlogCard from './Page/BlogCard';

export default function Home() {
    const [publications, setPublications] = useState([]);

    useEffect(() => {
        async function fetchPublications() {
            const response = await fetch('http://localhost:3000/Publication');
            const data = await response.json();
            setPublications(data);
        }
        fetchPublications();
    }, []);

    return (
        <div className="row" id="Publication">
            {publications.map(publication =>
                <BlogCard key={publication.id} {...publication} />
            )}
        </div>
    );
}




