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
export const originLatLng = originLatLng => {
    return {
        type: 'SET_ORIGIN_LATLNG',
        originLatLng
    }
}
export const destinationLatLng = destinationLatLng => {
    return {
        type: 'SET_DESTINATION_LATLNG',
        destinationLatLng
    }
}
export const origin = origin => {
    return {
        type: 'SET_ORIGIN',
        origin
    }
}
export const destination = destination => {
    return {
        type: 'SET_DESTINATION',
        destination
    }
}