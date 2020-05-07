function main() {
    Array.from(document.querySelectorAll('a[href]'))
        .forEach(enhanceLink)
        ;
}

function enhanceLink(link) {
    const { text, href, onclick, target } = link;
    const newOnClick = () => {
        const hitCallback = () => {
            if (onclick) {
                return onclick();
            }
            if (target === '_blank' || href.indexOf(location.origin) === -1) {
                window.open(href, '_blank');
            } else {
                document.location = href;
            }
        };
        sendGAEvent({
            category: `Page: ${location.pathname}`,
            action: `Click: ${text}`,
            label: `Destination: ${href.replace(location.origin, '')}`,
            hitCallback,
        });
        return false;
    };
    link.onclick = newOnClick;
    return link;
}

function elapsedSinceLoad() {
    // Feature detects Navigation Timing API support.
    if (window.performance) {
        // Gets the number of milliseconds since page load
        // (and rounds the result since the value must be an integer).
        return Math.round(performance.now());
    }
    return undefined;
}

function sendGAEvent({ category, action, label, value = elapsedSinceLoad(), hitCallback }) {
    console.log('GA', {
        hitType: 'event',
        eventCategory: category,
        eventAction: action,
        eventLabel: label,
        eventValue: value,
        'transport': 'beacon',
        'hitCallback': hitCallback,
    });
    ga('send', {
        hitType: 'event',
        eventCategory: category,
        eventAction: action,
        eventLabel: label,
        eventValue: value,
        'transport': 'beacon',
        'hitCallback': hitCallback,
    });
}

window.sendGAEvent = sendGAEvent;

function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

docReady(() => {
    main();
});
