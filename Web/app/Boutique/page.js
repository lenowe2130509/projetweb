"use client";
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

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
                <ProductCard key={publication.id} {...publication} />
            )}
        </div>
    );
}