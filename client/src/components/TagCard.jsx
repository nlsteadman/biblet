import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TagCard = ({ tag, setTag }) => {

    
  return (
    <div>
        <ul>
            <li><Link to={`/tags/${tag.id}`}>{ tag.content }</Link></li>
        </ul>
    </div>
  )
}

export default TagCard