const debounce = (func, wait = 1000) => {
    let timeout;

    const resultFunc = (...args) => {
        const later = () => {
            timeout = null;
            func.apply(this, args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };

    resultFunc.cancel = () => {
        clearTimeout(timeout);
    };

    return resultFunc;
};

export default debounce;