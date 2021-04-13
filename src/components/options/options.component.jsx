import React from "react";
import { withRouter } from "react-router-dom";
import './options.styles.scss';

const Options = ({ id, name, history, match }) => (
    <div>
        <h1 className='option'
        onClick={() => history.push(`${match.url}country/${name}`)}
        >{name.toUpperCase()}</h1>
    </div>
);

export default withRouter(Options);