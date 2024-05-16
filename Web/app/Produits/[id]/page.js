"use client";
import React, { useEffect, useState } from 'react';
import ProduitDetail from './ProduitDetail';
import AddComment from './AddComment';
import CommentList from './CommentList';
import UserContext from './UserContext';

export default function Home({ params }) {
    return (
        <>
            <UserContext.Provider value={params.id}>
                <ProduitDetail></ProduitDetail>
            </UserContext.Provider>
        </>
    )
}


