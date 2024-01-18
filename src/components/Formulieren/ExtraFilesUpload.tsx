import { CloseButton, Form } from "react-bootstrap";

const ExtraFilesUpload: React.FC<UploadFilesProps> = ({ files, setFiles }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const gekozenFiles = Array.from(event.target.files);
      setFiles((prev) => [...prev, ...gekozenFiles]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <>
      <br />
      <Form.Label>Upload documenten:</Form.Label>
      <Form.Control type="file" multiple onChange={handleFileChange} />
      {files.length > 0 && (
        <div>
          <br />
          <h6>gekozen documenten:</h6>
          <ul>
            {files.map((file, index) => (
              <li key={index}>
                {file.name}{" "}
                <CloseButton onClick={() => handleRemoveFile(index)} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default ExtraFilesUpload;
