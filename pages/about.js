import React, { useState } from 'react';
import DocumentHead from '../components/Head';

const About = () => {

    return (
        <>
            <DocumentHead />

            <div className='container'>
                <h1>About Me</h1>
                <p>Coming Soon! Feel free to reach out at
                    <a href="mailto:josh@hurn.io">josh@hurn.io</a>
                </p>
            </div>
        </>
    )
}

export default About