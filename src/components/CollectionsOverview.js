import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../redux/shop/shopSelectors';
import CollectionPreview from './CollectionPreview';

import '../styles/CollectionsOverview.scss';

const CollectionsOverview = ({ collections }) => (
    <div className="collections-overview">
        {
            collections.map(({ id, ...CollectionProps}) => (
                <CollectionPreview key={id} {...CollectionProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);