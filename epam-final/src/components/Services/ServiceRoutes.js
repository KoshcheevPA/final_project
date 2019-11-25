import React from 'react';

import {Route} from 'react-router-dom';
import ServicesPages from './ServicesPages';

function ServicesRoute({services}) {
    const servicesElements = services.map(service =>
        <Route exact path={service.path}  component={ServicesPages} key={service.id + 'route'}><ServicesPages services={service}/></Route>
    );

    return (
        <div>
            {servicesElements}
        </div>
    );
}

export default ServicesRoute;