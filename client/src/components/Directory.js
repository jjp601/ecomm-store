import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../redux/directory/directorySelectors';

import MenuItem from './MenuItem';

import '../styles/Directory.scss';

const Directory = ({ sections }) => (
  <div className="directory-menu">
      {
        sections.map(({ id, ...sectionProps }) => (
            <MenuItem key={id} {...sectionProps} />
        ))
      }
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
