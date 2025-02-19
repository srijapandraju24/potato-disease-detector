
import Layout from '../components/Layout';
import { Card } from "@/components/ui/card";

const Documentation = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
        <h1 className="text-chapter font-bold text-center">
          Documentation
        </h1>

        <Card className="p-6 space-y-6">
          <section>
            <h2 className="text-subtitle-1 font-bold">1.1 System Overview</h2>
            <p className="text-body mt-2">
              The AI Potato Leaf Disease Detection System is designed to provide accurate and timely diagnosis of common potato leaf diseases through image analysis.
            </p>
          </section>

          <section>
            <h2 className="text-subtitle-1 font-bold">1.2 How to Use</h2>
            <div className="text-body mt-2 space-y-2">
              <h3 className="text-subtitle-2 font-bold">1.2.1 Image Upload</h3>
              <ul className="list-decimal list-inside space-y-1">
                <li>Ensure good lighting conditions</li>
                <li>Center the leaf in the frame</li>
                <li>Avoid blur and shadows</li>
              </ul>

              <h3 className="text-subtitle-2 font-bold mt-4">1.2.2 Analysis Process</h3>
              <ul className="list-decimal list-inside space-y-1">
                <li>Click "Upload Image" to select a photo</li>
                <li>Review the preview</li>
                <li>Click "Analyze Image" to start detection</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-subtitle-1 font-bold">1.3 Interpreting Results</h2>
            <div className="text-body mt-2 space-y-2">
              <p>The system provides:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Disease classification</li>
                <li>Confidence score</li>
                <li>Treatment recommendations</li>
              </ul>
            </div>
          </section>
        </Card>
      </div>
    </Layout>
  );
};

export default Documentation;

