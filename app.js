'use strict';

console.log('Hello JS');
// statement
// expression
let newVar, newVarB;

if (status === 'save') {
    return <button>Save</button>;
} else (status === 'update') {
    return <button>Update</button>;
}

// statements cannot be wrriten in JSX
status === 'save' ? <button>Save</button> : <button>Update</button>;

function newButton() {
    return (
        status === 'save' ? <button>Save</button> : <button>Update</button>
    )
}