import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey = '8524d6c40a31dae6bc0b5ddb903d32a22e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = () => {
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles }) => {
                if (command === 'newsHeadlines') {
                    console.log(articles);
                }
            }
        })
    }, [])
    return (
        <div>
            <h1>Alan AI</h1>
        </div>
    )
}
export default App;