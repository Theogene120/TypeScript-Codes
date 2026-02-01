var authorize = function (role) {
    switch (role) {
        case 'admin':
            return 'You can do anything';
        case 'user':
            return 'You can do something';
        default:
            // never reach here util we add a new role
            var _unreachable = role;
            throw new Error("Invalid role: ".concat(_unreachable));
    }
};
console.log(authorize('user'));
