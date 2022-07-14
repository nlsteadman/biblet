import React from 'react';
import { Link } from 'react-router-dom';

const TagCard = ({ tag }) => {

    
  return (
    <div>
        <ul>
            <li><Link to={`/tags/${tag.id}`}>{ tag.content }</Link></li>
        </ul>
    </div>
  )
}

export default TagCard