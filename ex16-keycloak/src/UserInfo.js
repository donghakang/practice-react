import React, { useState, useEffect } from 'react'


function UserInfo(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [id, setId] = useState('')

    props.keycloak.loadUserInfo().then(userInfo => {
        setName(userInfo.name)
        setEmail(userInfo.email)
        setId(userInfo.sub)
        console.log(userInfo)
    })

    return (
        <div>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>id: {id}</p>
        </div>
    )
}

export default UserInfo;