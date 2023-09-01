// import { Child } from './Child';

// const Parent = () => {

//     return <Child color='red' onClick={() => console.log('Clicked')}>
//     blablabla
//     </Child>;
// };

// export default Parent;


import { ChildAsFC } from './Child';

const Parent = () => {

    return <ChildAsFC color='red' onClick={() => console.log('Clicked')}>
    blablabla
    </ChildAsFC>;
};

export default Parent;