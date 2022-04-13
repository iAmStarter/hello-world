import React from "react";

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello Theerasak</h1>
    //     </div>
    // )


    return React.createElement('div', { id: 'hello', className: 'myClass' }, React.createElement('h1', null, 'Hello Theerasak'))
}

export default Hello;