export default function LoaderScreen(){
    return (
    <div
      className="d-flex flex-column justify-content-center align-items-center position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 text-white"
      style={{ zIndex: 1050 }}
    >
      <div
        className="spinner-border text-light"
        style={{ width: "4rem", height: "4rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="mt-3 fs-5">Authenticating...</p>
    </div>
  );
}
