"use client";
import React, { useEffect, useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa'
import ProductCard from './ProductCard';

export default function Home() {
    const [publications, setPublications] = useState([]);

    useEffect(() => {
        async function fetchPublications() {
            try {
                const response = await fetch('http://localhost:3000/Publication', {
                    method: 'GET',
                });
                const data = await response.json();
                setPublications(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des publications:', error);
            }
        }
        fetchPublications();
    }, []);
    return (
        <>
        <div className="row" id="Publication">
            {publications.map(publication =>
                <ProductCard key={publication.id} {...publication} />
            )}
        </div>
        </>
    );
}