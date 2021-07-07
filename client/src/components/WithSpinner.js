import React from 'react';

import '../styles/WithSpinner.scss';

const WithSpinner = (WrappedComponenet) => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <div className="spinner-overlay">
            <div className="spinner"></div>
        </div>
    ) : (
        <WrappedComponenet {...otherProps} />
    )
}

export default WithSpinner;