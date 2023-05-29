import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Text from '../Text';


interface DropzoneProps {
    onFileUploaded: (file: File) => void;
}
 

function Dropzone({onFileUploaded} : DropzoneProps){

    const [selectedFileUrl, setSelectedFileUrl] = useState("");
    const onDrop = useCallback(
        (acceptedFiles: any []) => {
            const file = acceptedFiles[0];

            const fileURL = URL.createObjectURL(file);

            setSelectedFileUrl(fileURL);
            onFileUploaded(file);
        }, 
        [onFileUploaded]
    )

    const {getRootProps, getInputProps, isDragActive} = useDropzone({ onDrop })
    return(
        <div className="flex mt-4" {...getRootProps()}>
            <input {...getRootProps()}  />

            {selectedFileUrl ? (
                <img src={selectedFileUrl} className='max-h-96 rounded-lg'/>
            ): <Text size="sm">Arraste a imagem para cá</Text>} 
        </div>
    );
}

export default Dropzone;