export function clone(object) {
    return JSON.parse(JSON.stringify(object));
}

export function camelToKebab(string) {
    return string.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

export function reachGoal(name) {
    if (window.Ya) {
        window.Ya._metrika.counter.reachGoal(name);
    }
}

export function getStaticUrl(path, isCssUrl = false) {
    const staticUrl = `${window.STATIC_PATH}/${path}`;
    return isCssUrl ? `url(${staticUrl})` : staticUrl;
}

export function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

export function priceFormatting(string) {
    const price = Number.prototype.toFixed.call(parseFloat(string) || 0, 0);
    let priceSep = price.replace(/(\D)/g, ",");
    priceSep = priceSep.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");

    return priceSep;
}