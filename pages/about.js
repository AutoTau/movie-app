import React from 'react';

// // functional component - arrow function
// const About = () => (
//     <h1>This is the about page!</h1>
// )

// // functional component - normal function
// function About () {
//     return (
//         <h1>This is the about page!</h1>
//     )
// }

// functional component - arrow function
// WHEN TO USE:
// For smaller componenets, reusable components, presentational components(we can use hooks and specify state)
// const About = () => {
//     const message = 'This is the about page!'
//     return (
//         <h1>{message}</h1>
//     )

// }

// const About = () => {
//     const message = 'This is the about page!'
//     return React.createElement('h1', null, message)
// }


class About extends React.Component {

    // need this if you want to return anything in a class component
    render() {
        return (
            <h1>Hello I am a class component</h1>
        )
    }

}




export default About