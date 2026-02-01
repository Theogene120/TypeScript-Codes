var getName = function (name) {
    switch (name) {
        case 'Theos': {
            console.log("Welcome Dr. ".concat(name, "!"));
            break;
        }
        default:
            console.log("Welcome ".concat(name));
            break;
        case 'Eva':
            console.log("Welcome Mr. ".concat(name));
            break;
    }
};
getName('Mugisha');
