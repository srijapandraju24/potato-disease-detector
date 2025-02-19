
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-bold text-primary hover:text-primary/90 transition-colors">
            Potato Leaf Disease Detection
          </Link>
          <div className="flex gap-6">
            <Link to="/" className="text-gray-600 hover:text-primary transition-colors">Home</Link>
            <Link to="/methodology" className="text-gray-600 hover:text-primary transition-colors">Methodology</Link>
            <Link to="/documentation" className="text-gray-600 hover:text-primary transition-colors">Documentation</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

