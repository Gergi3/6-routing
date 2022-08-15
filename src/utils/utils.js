export const getIdFromUrl = (url) => {
    if (url) {
        return url.split('/').reverse()[1];
    }
    return null;
};
