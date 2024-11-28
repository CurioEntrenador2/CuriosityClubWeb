export function getFolders(directory) {
    const fs = require('fs');
    const path = require('path');

    return fs.readdirSync(directory).filter(file => {
        return fs.statSync(path.join(directory, file)).isDirectory();
    });
}
