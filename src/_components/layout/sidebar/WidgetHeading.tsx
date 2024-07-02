import React from 'react';

const WidgetHeading: React.FC<{ title: string }> = ({ title }) => {
    return (
        <h6 className='p-2 bg-light border-bottom'>
            {title && title}
        </h6>
    );
}

export default WidgetHeading;