
import Layout from '../components/Layout';
import { Card } from "@/components/ui/card";

const Methodology = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
        <h1 className="text-chapter font-bold text-center">
          Methodology
        </h1>

        <Card className="p-6 space-y-6">
          <section>
            <h2 className="text-subtitle-1 font-bold">1.1 Image Processing</h2>
            <p className="text-body mt-2">
              Our system utilizes advanced image processing techniques to analyze potato leaf images. This includes:
            </p>
            <ul className="list-disc list-inside text-body mt-2 space-y-1">
              <li>Color analysis and segmentation</li>
              <li>Feature extraction</li>
              <li>Pattern recognition</li>
            </ul>
          </section>

          <section>
            <h2 className="text-subtitle-1 font-bold">1.2 Disease Classification</h2>
            <p className="text-body mt-2">
              The classification process employs machine learning algorithms trained on extensive datasets of potato leaf diseases:
            </p>
            <ul className="list-disc list-inside text-body mt-2 space-y-1">
              <li>Convolutional Neural Networks (CNN)</li>
              <li>Transfer Learning techniques</li>
              <li>Multi-class classification models</li>
            </ul>
          </section>

          <section>
            <h2 className="text-subtitle-1 font-bold">1.3 Accuracy and Validation</h2>
            <div className="text-body mt-2 space-y-2">
              <p>
                Our model has been validated through extensive testing and cross-validation:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>95% accuracy on validation dataset</li>
                <li>Robust performance across different lighting conditions</li>
                <li>Continuous model improvement through feedback</li>
              </ul>
            </div>
          </section>
        </Card>
      </div>
    </Layout>
  );
};

export default Methodology;

