const kb = 1024;
const mb = kb * kb;
const gb = mb * kb

export const calculateFileSize = (bytes) => {
    if (bytes <= mb) {
        return getRound(bytes / kb) + "KB"
    } else if (bytes <= gb) {
        return getRound(bytes / mb) + "MB"
    }
    // else if (bytes <= gb) {
    //     return getRound(bytes / gb) + "GB"
    // }
}

const getRound = (bytes) => {
    const num = Number(bytes);
    const roundedString = num.toFixed(2);
    return Number(roundedString);
}