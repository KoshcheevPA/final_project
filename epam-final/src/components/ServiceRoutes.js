import React from 'react';
import Main from "./Main/Main";

import {Route} from "react-router-dom";

function ServicesRoute({services}) {
    const servicesElements = services.map(service =>
        <Route exact path={service.path} component={Main} key={service.id + 'route'}/>
    );

    return (
        <div>
            {servicesElements}
        </div>
    );
}

export default ServicesRoute;