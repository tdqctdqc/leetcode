var simplifyPath = function(path) {
    path = path.replace('../', '');

    if(path[path.length - 1] === '/') {
        path = path.slice(0, path.length - 1);
    }


    for (let i = 1; i < path.length; i++) {
        if(path[i] === '/') {
            if(path[i - 1] === '/') {
                path = path.slice(0, i) + path.slice(i+1, path.length);
                i--;
            }
        }
    }

    if(path === '') return '/';
    return path;
};

console.log(simplifyPath('/../'));