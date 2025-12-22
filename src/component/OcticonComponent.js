import * as octicons from 'octicons';
import PropTypes from 'prop-types';
import React from 'react';

export function OcticonComponent(props) {
    const width = props.size === 'normal' ? 24 : 48;
    const height = props.size === 'normal' ? 24 : 48;

    return (
        <span className="octicon" style={{width: `${width}px`, height: `${height}px`}} dangerouslySetInnerHTML={{__html: octicons[props.name].toSVG()}}></span>
    );
}

OcticonComponent.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['normal', 'large'])
};
