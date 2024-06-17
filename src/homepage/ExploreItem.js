import React from 'react';
import { StarIcon } from '@primer/octicons-react';
import './Explore.css';

const ExploreItem = ({ name, description, stars }) => {
    return (
        <div className="repository-item">
            <div className="repository-header">
                <h2>{name}</h2>
            </div>
            <div className='repository-desc'>
                <p>{description}</p>
            </div>
            <ul>
                <li className="repository-stars">
                    <div>
                        <StarIcon size={16} className='hoverable-icon' />
                        <span>{stars}</span>
                    </div>
                </li>
                <li className="repository-lang">
                    <div>
                        <div className='colored-dot'></div>
                        <span>JavaScript</span>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default ExploreItem;