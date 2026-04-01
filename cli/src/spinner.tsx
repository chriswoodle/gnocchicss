import { useState, useEffect } from 'react';
import { Text } from 'ink';
import cliSpinners from 'cli-spinners';

interface SpinnerProps {
    type?: keyof typeof cliSpinners;
}

export default function Spinner({ type = 'dots' }: SpinnerProps) {
    const [frame, setFrame] = useState(0);
    const spinner = cliSpinners[type];

    useEffect(() => {
        const timer = setInterval(() => {
            setFrame(prev => (prev + 1) % spinner.frames.length);
        }, spinner.interval);
        return () => clearInterval(timer);
    }, [spinner]);

    return <Text>{spinner.frames[frame]}</Text>;
}
