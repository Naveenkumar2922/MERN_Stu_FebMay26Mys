function mergeSettings(savedSettings, defaultSettings) {

    let merged = {};

    for (let key in defaultSettings) {
        merged[key] = defaultSettings[key];
    }

    for (let key in savedSettings) {
        merged[key] = savedSettings[key];
    }

    let mergedJSON = JSON.stringify(merged);

    return {
        mergedObject: merged,
        mergedJSON: mergedJSON
    };
}

let defaultSettings = {
    theme: "Light",
    font: 14,
    language: "en"
};

let savedSettings = {
    theme: "dark",
    font: 18
};

let result = mergeSettings(savedSettings, defaultSettings);

console.log(result);