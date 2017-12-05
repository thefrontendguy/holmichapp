function translate(newString) { 
    const translations = {
        "en": {
            "APP_LANGUAGE": "The language of this app", 
            "APPNAME" : "Some Name",
            "SLOGAN" : "the best app ever",
            
            "HOME_TITLE": "A title for RRRR the home screen",
            "HOME_TEXT": "A text for the home",
            
            "GREETING" : `Hello ${newString}, how are you?`,
            
            "ROUTE": "Route Planner",
            "LOGIN": "Sign in",
            "LOGOUT_MESSAGE": "Log out from this computer?",
            "LOGOUT": "Log out",
            "REGISTER": "Register",
            
            "PROFILE": "Cockpit",
            "PROFILE_TITLE": "Profile Title",
            "PROFILE_GREETING": "Some greetings for the logged in user",
            
            "MAPS_INFO_TITLE": "Please add origin and destination addresses, to calculate the route",
            "FROM": "From",
            "FILL_FORM": "Please fill the form, to see distance and duration.",
            "DESTINATION": "Destination",
            "SUBMIT_ADDRESSES": "Calculate the Route",
            "DISTANCE": "The distance is: ",
            "DURATION": "The duration is: ",
            "ESTIMATED_DURATION": "Estimated duration: ",
            "ROUTE_IMPOSSIBLE": "It is not possible to go there by car",
            
            "LOGIN_FORM_TITLE": "Log In",
            "REGISTER_FORM_TITLE": "Register",
            "ENTER_USERNAME": "Enter email",
            "PLACEHOLDER_USERNAME": "Your email",
            "ENTER_PASSWORD": "Enter password",
            "PLACEHOLDER_PASSWORD": "Your password",
            
            "NEW_HERE": "New here? Create a new account.",
            "ALREADY_HAS_ACCOUNT": "Already have an account? Sign in here.",
        },
        "de": {
            "APP_LANGUAGE": "Die Sprache der App", 
            "APPNAME" : "HolMichApp",
            "SLOGAN" : "Die Abhol-App",

            "HOME_TITLE": "Das ist die Startseite",
            "HOME_TEXT": "Irgend ein Text auf der Startseite",
            "GREETING" : `Hallo ${newString}, wie geht es dir?`,
            
            "ROUTE": "Zum Routenplaner",
            "LOGIN": "Einloggen",
            "LOGOUT_MESSAGE": "Von diesem Computer abmelden?",
            "LOGOUT": "Ausloggen",
            "REGISTER": "Registrieren",

            "PROFILE": "Cockpit",
            "PROFILE_TITLE": "Die Überschrift des Profils",
            "PROFILE_GREETING": `Hallo ${newString}, geht es dir gut?`,
            
            "MAPS_INFO_TITLE": "Bitte gib den Startpunk und das Ziel deiner gewünschten Route an",
            "FROM": "Von",
            "FILL_FORM": "Bitte fülle die Felder aus, um die Entfernung und die Fahrtdauer anzuzeigen.",
            "DESTINATION": "Nach",
            "SUBMIT_ADDRESSES": "Route berechnen",
            "DISTANCE": "Die Entfernung beträgt: ",
            "DURATION": "Die Fahrtdauer beträgt: ",
            "ESTIMATED_DURATION": "Geschätzte Fahrtdauer: ",
            "ROUTE_IMPOSSIBLE": "It is not possible to go there by car",

            "LOGIN_FORM_TITLE": "Einloggen",
            "REGISTER_FORM_TITLE": "Registrieren",
            "ENTER_USERNAME": "Email eingeben",
            "PLACEHOLDER_USERNAME": "Email",
            "ENTER_PASSWORD": "Passwort eingeben",
            "PLACEHOLDER_PASSWORD": "Passwort",
            
            "NEW_HERE": "Neu hier? Registriere einen neuen Benutzer.",
            "ALREADY_HAS_ACCOUNT": "Bereits einen Account? Einfach anmelden.",
        }
    }
return translations;
}
export default translate;