import Overlay from '@/components/Overlay/Overlay';
import Button from '@/components/ui/Button/Button';
import { useState } from 'react';

const UploadFilePage = () => {
    const [counter, setCounter] = useState<number>(0);

    const increment = () => setCounter((count) => ++count);

    return (
        <div>
            <h1>Upload page {counter}</h1>
            <Button onClick={increment}>Something</Button>

            <Overlay />
        </div>
    );
};

export default UploadFilePage;
