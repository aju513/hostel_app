
const Stars = () => {
  return (
    <div>
      <h1>Rating</h1>
      {/* first star row start from here */}
      <div className="flex ">
        {[...Array(5)].map((_, index) => (
          <div key={index}>
            <input type="radio" className="hidden" />
            <label htmlFor={`star${index + 1}`} className="cursor-pointer">
              <svg
                className="w-6 h-6 fill-current text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l2.132 6.53h7.064l-5.73 4.175 2.19 6.697L12 15.741l-5.756 4.66 2.19-6.697-5.73-4.175h7.064z" />
              </svg>
            </label>
          </div>
        ))}
      </div>
      {/* second row star */}
      <div className="flex">
        {[...Array(4)].map((_, index) => (
          <div key={index}>
            <input type="radio" className="hidden" />
            <label htmlFor={`star${index + 1}`} className="cursor-pointer">
              <svg
                className="w-6 h-6 fill-current text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l2.132 6.53h7.064l-5.73 4.175 2.19 6.697L12 15.741l-5.756 4.66 2.19-6.697-5.73-4.175h7.064z" />
              </svg>
            </label>
          </div>
        ))}
      </div>
      {/* third row star */}
      <div className="flex">
        {[...Array(3)].map((_, index) => (
          <div key={index}>
            <input type="radio" className="hidden" />
            <label htmlFor={`star${index + 1}`} className="cursor-pointer">
              <svg
                className="w-6 h-6 fill-current text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l2.132 6.53h7.064l-5.73 4.175 2.19 6.697L12 15.741l-5.756 4.66 2.19-6.697-5.73-4.175h7.064z" />
              </svg>
            </label>
          </div>
        ))}
      </div>
      {/* fourth row star */}
      <div className="flex">
        {[...Array(2)].map((_, index) => (
          <div key={index}>
            <input type="radio" className="hidden" />
            <label htmlFor={`star${index + 1}`} className="cursor-pointer">
              <svg
                className="w-6 h-6 fill-current text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l2.132 6.53h7.064l-5.73 4.175 2.19 6.697L12 15.741l-5.756 4.66 2.19-6.697-5.73-4.175h7.064z" />
              </svg>
            </label>
          </div>
        ))}
      </div>
      {/* fifth row star */}
      <div className="flex">
        {[...Array(1)].map((_, index) => (
          <div key={index}>
            <input type="radio" className="hidden" />
            <label htmlFor={`star${index + 1}`} className="cursor-pointer">
              <svg
                className="w-6 h-6 fill-current text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l2.132 6.53h7.064l-5.73 4.175 2.19 6.697L12 15.741l-5.756 4.66 2.19-6.697-5.73-4.175h7.064z" />
              </svg>
            </label>
          </div>
        ))}
      </div>
      {/* ends here */}
    </div>
  );
};

export default Stars;
