import crypto from 'crypto';

function generateFileName() {
    return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, (c) => {
        return (+c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))).toString(16);
    });
}

export default generateFileName;
