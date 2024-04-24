"use client";
import React, { useEffect, useState } from 'react';
import BlogDetail from './composantsForum/BlogDetail';
import AddComment from './composantsForum/AddComment';
import CommentList from './composantsForum/CommentList';
import UserContext from './composantsForum/UserContext';

export default function Home({ params }) {
    return (
        <>
            <UserContext.Provider value={params.id}>
                <BlogDetail></BlogDetail>
                <AddComment> </AddComment>
                <CommentList> </CommentList>
            </UserContext.Provider>
        </>
    )
}


