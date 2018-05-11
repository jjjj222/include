//------------------------------------------------------------------------------
export function isChrome() {
    const is_chrome = !!window.chrome && !!window.chrome.webstore;

    const sUsrAg = navigator.userAgent;
    if(sUsrAg.indexOf("Chrome") > -1 && is_chrome) {
        return true;
    }

    if (/HeadlessChrome/.test(navigator.userAgent)) {
        return true;
    }

    return false;
}
