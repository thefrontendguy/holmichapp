export const email = email => {
    return {
        type: 'SET_EMAIL',
        email
    }
}
export const username = username => {
    return {
        type: 'SET_USERNAME',
        username
    }
}
export const isLoggedIn = isLoggedIn => {
    return {
        type: 'SET_LOGGED_IN',
        isLoggedIn
    }
}
export const language = language => {
    return {
        type: 'SET_LANGUAGE',
        language
    }
}