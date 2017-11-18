// this helper function replaces parts of translations with own text, like usernames
// usage: addvar(the_string_with_%addvar%_in it, "text to replace %addvar%")
export function addvar(text, variable) {
    return text.replace("%addvar%", variable);
}