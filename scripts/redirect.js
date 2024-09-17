function redirect(alternatives){
    var current = window.location.toString();
    for (const key in alternatives){
        if (current.startsWith(key) || current == key){
            var newUrl = current.replace(key, alternatives[key]);
            console.log(newUrl);
            window.location.replace(newUrl);
            return;
        }
    }
}

var url = chrome.runtime.getURL("data/alternatives.json");
fetch(url)
    .then((response) => response.json()) // file contains json
    .then((json) => redirect(json));
