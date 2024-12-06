import { classNames } from '@/lib/classNames/classNames';
import { FileFromStorage } from '@/types/File';
import FileIcon from '@assets/fileIcon.svg?react';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './FileContentRepresentation.module.scss';

interface FileContentRepresentationProps {
    file: FileFromStorage;
    className?: string;
}

const FileContentRepresentation: FC<FileContentRepresentationProps> = ({ file, className }) => {
    const blob = new Blob([new Uint8Array(file.data.data)], { type: file.data.type });
    const [textData, setTextData] = useState<string | string[]>('');
    const { t } = useTranslation();

    useEffect(() => {
        if (file.mimetype.includes('text') || file.mimetype.includes('svg')) {
            const fileReader = new FileReader();
            fileReader.readAsText(blob, file.encoding);

            fileReader.onload = (event) => {
                if (!event.target) {
                    return;
                }
                const { result } = event.target;

                if (!result || typeof result !== 'string') {
                    return;
                }

                if (file.mimetype.includes('text')) {
                    setTextData(result.split('\n'));
                } else {
                    setTextData(result);
                }
            };
        }
    }, []);

    return (
        <div className={classNames(cls.representation, {}, [className ? className : ''])}>
            <p className={cls.representation__clarification}>({t('clarification')})</p>
            {file.mimetype.includes('image') && !file.mimetype.includes('svg') && (
                <img className={cls.representation__img} src={URL.createObjectURL(blob)} />
            )}
            {file.mimetype.includes('svg') && (
                <div className={cls.representation__img} dangerouslySetInnerHTML={{ __html: textData }}></div>
            )}
            {file.mimetype.includes('text') && typeof textData === 'object' && (
                <div className={cls.representation__text}>
                    {textData.map((item) => (
                        <p key={item}>{item}</p>
                    ))}
                </div>
            )}
            {!textData && !file.mimetype.includes('image') && <FileIcon className={cls.representation__file} />}
        </div>
    );
};

export default FileContentRepresentation;
