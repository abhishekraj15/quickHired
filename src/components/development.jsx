import { FiTool } from "react-icons/fi";
import { Link } from "react-router-dom";

function UnderDevelopmentPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-transparent p-4">
      <div className="text-center bg-white rounded-lg shadow-md p-8 max-w-lg w-full">
        <div className="flex justify-center mb-4">
          <FiTool size={64} className="text-gray-600 animate-spin" />
        </div>
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Feature Under Development
        </h1>
        <p className="text-gray-600 mb-6">
          We're working hard to bring this feature to you. Stay tuned for
          updates! Meanwhile, explore other parts of our site.
        </p>
        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default UnderDevelopmentPage;
