import { useEffect } from "react";
import { useDropzone } from "react-dropzone";

const FileInput = (props: any) => {
  const { name, label = name } = props;
  // const [input, setInput] = useState();
  // const handleFileChange = (e) => {
  //   let file = e.target.files[0];
  //   let reader = new FileReader();
  //   console.log(e.target.files);
  //   reader.onloadend = () => {
  //     console.log(reader.result, "msg");
  //     // setInput((prev) => ({ photo: reader.result }));
  //   };
  //   reader.readAsDataURL(file);
  // };

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({ multiple: false });
  useEffect(() => {
    if (acceptedFiles[0]) {
      console.log(acceptedFiles[0]);
      let reader = new FileReader();
      console.log(acceptedFiles[0]);
      reader.readAsDataURL(acceptedFiles[0]);
      reader.onload = () => {
        if (!!reader.result) {
          console.log("reader.result", reader.result);
        }
      };
    }
  }, [acceptedFiles]);
  return (
    <>
      <div className="flex flex-col col-span-2 w-[90%] m-auto">
        <label
          className="block text-gray-700 text-sm font-bold mb-2 capitalize"
          htmlFor={name}
        >
          {label}
        </label>
        <div {...getRootProps()}>
          <input
            {...props}
            className="shadow appearance-none border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
            id={name}
            {...getInputProps()}
          />
          {/* <input type="file" onChange={(e) => handleFileChange(e)} /> */}
          <div
            className={
              "w-full p-2 border border-dashed border-gray-900 " +
              (isDragActive ? "bg-gray-400" : "bg-gray-200")
            }
          >
            <p className="text-center my-2">Drop the files here ...</p>
            {/* Optionally you may display a preview of the file(s) */}
          </div>
        </div>
      </div>
    </>
  );
};

export default FileInput;
