
import React, { useState, useEffect } from 'react'

import UserInfo from './UserInfo';
import Logout from './Logout';
import Keycloak from 'keycloak-js';

function Secured() {
    const [keycloak, setKeycloak] = useState(null)
    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
        const keycloak = Keycloak('/keycloak.json');
        keycloak.init({ onLoad: 'login-required' }).then(authenticated => {
            setKeycloak(keycloak)
            setAuthenticated(authenticated)
        })
    }, [])

    if (keycloak && authenticated) {
        return (
            <div>
                <p>
                    This is a Keycloak-secured component of your application. You shouldn't be able to see this
                    unless you've authenticated with Keycloak.
                </p>
                <UserInfo keycloak={keycloak} />
                <Logout keycloak={keycloak} />
            </div>
        );
    } else {
        return <div>Initializing Keycloak...</div>
    }
}


export default Secured;