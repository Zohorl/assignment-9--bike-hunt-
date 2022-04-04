import React from 'react';

const Blogs = () => {
    return (
        <div className='my-12 mx-5 bg-rose-300 rounded p-3'>
            <h4 className='text-2xl mb-2 font-bold'>Q-1 : What is Context API ?</h4>
            <p className='text-xl'>Context API is a React structure that enables to exchange unique details in solving prop-drilling from all levels of application.This is a way for a React app to effectively produce global variables that can be passed around.This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. React.createContext() returns a consumer and a provider.Provider is a component that as it's names suggests provides the state to its children.Consumer as it so happens is a component that consumes and uses the state. </p>
            <br /><br />
            <h4 className='text-2xl font-bold'>Q-2 : What is different between inline and inline block elements ?</h4>
            <div>
                <h4 className='text-xl'>Inline elements : </h4>
                <p className='text-xl'>1. respect left and right margins and padding, but not top and bottom</p>
                <p className='text-xl'>2. cannot have a width and height set</p>
                <p className='text-xl'>3. allow other elements to sit to their left and right</p>
                <br />
                <h4 className='text-xl'>Inline block elements : </h4>
                <p className='text-xl'>1. respect top and bottom margins and padding</p>
                <p className='text-xl'>2. respect height and width</p>
                <p className='text-xl'>3. allow other elements to sit to their left and right</p>
            </div>
        </div>
    );
};

export default Blogs;