import { FaTrash, FaEdit } from 'react-icons/fa'; 
import React from 'react';
export default function BlogCard(props){
    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card m-2">
                <img src="images/Etu.png" className="card-img-top img-fluid" alt="Image 1"/>
                <div className="card-body">
                    <h5 className="card-title fw-bold">{props.titre}</h5>
                    <p className="card-text m-3 text-truncate-2">{props.Contenu}</p>
                    <div className="d-flex justify-content-between">
                        <a href={`Forum/${props.id}`} className="btn btn-primary">Lire la suite</a>
                        <div>
                            <button className="btn btn-secondary me-2">
                            <a className='text-decoration-none text-white' href={`../AddPage/ComposantForm/ModifForm/${props.id}`}>
                                    <FaEdit /> Modifier
                                </a>
                            </button>
                            <button className="btn btn-danger text-decoration-none">
                                <a className='text-decoration-none text-white' href={`../AddPage/ComposantForm/DeleteForm/${props.id}`}>
                                    <FaTrash /> Supprimer
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

