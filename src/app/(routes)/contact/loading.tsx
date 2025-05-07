import LoadingSpinner from "@/components/common/spinner/LoadingSpinner";

function loading() {
  return <div className="h-screen flex items-center justify-center">
    <LoadingSpinner/>
  </div>;
}

export default loading
