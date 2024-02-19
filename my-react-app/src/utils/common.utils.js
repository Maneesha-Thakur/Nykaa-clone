
export const addEllipsis = (text) => {

    if (text.length > 50) {
        return text.subString(0, 50) + '...';
    }
    return text
}