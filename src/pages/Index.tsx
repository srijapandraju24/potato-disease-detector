
import { useState } from 'react';
import Layout from '../components/Layout';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pipeline } from "@huggingface/transformers";
import { toast } from "sonner";

const Index = () => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState<{ disease: string; confidence: number } | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      // Reset results when new image is uploaded
      setResults(null);
    }
  };

  const handleAnalyze = async () => {
    if (!image) return;

    try {
      setAnalyzing(true);
      toast.info("Initializing disease detection model...");

      // Initialize the image classification pipeline
      const classifier = await pipeline(
        "image-classification",
        "onnx-community/mobilenetv4_conv_small.e2400_r224_in1k",
        { device: "webgpu" }
      );

      toast.info("Analyzing leaf image...");
      const imageUrl = URL.createObjectURL(image);
      const output = await classifier(imageUrl);

      // Get the top prediction
      const topResult = output[0];
      
      // Map the result to a more user-friendly format
      // Note: In a production environment, you'd want to map the model's output
      // to specific potato plant diseases. This is a simplified example.
      setResults({
        disease: topResult.label,
        confidence: topResult.score * 100
      });

      toast.success("Analysis complete!");
    } catch (error) {
      console.error("Error during analysis:", error);
      toast.error("Error analyzing image. Please try again.");
    } finally {
      setAnalyzing(false);
    }
  };

  const getRecommendations = (disease: string) => {
    // This would be expanded with real recommendations based on the disease
    const recommendations = {
      "healthy": [
        "Continue regular maintenance",
        "Monitor for early signs of disease",
        "Maintain proper irrigation"
      ],
      "default": [
        "Isolate affected plants",
        "Consider fungicide treatment",
        "Improve air circulation",
        "Adjust watering schedule"
      ]
    };

    return disease.toLowerCase().includes("healthy") 
      ? recommendations.healthy 
      : recommendations.default;
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
        <section className="text-center space-y-4">
          <h1 className="text-chapter font-bold">
            AI-Powered Potato Leaf Disease Detection System
          </h1>
          <p className="text-body text-gray-600">
            Upload a photo of a potato plant leaf for instant disease detection and analysis
          </p>
        </section>

        <Card className="p-6 space-y-6">
          <h2 className="text-subtitle-1 font-bold">1. Disease Detection</h2>
          
          <div className="flex flex-col items-center gap-4">
            <div className="w-full max-w-md aspect-video bg-muted rounded-lg flex items-center justify-center overflow-hidden">
              {preview ? (
                <img src={preview} alt="Uploaded leaf" className="object-contain w-full h-full" />
              ) : (
                <p className="text-gray-500">No image uploaded</p>
              )}
            </div>
            
            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={() => document.getElementById('file-upload')?.click()}
                className="animate-fade-up"
              >
                Upload Image
              </Button>
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
              <Button
                onClick={handleAnalyze}
                disabled={!image || analyzing}
                className="animate-fade-up"
              >
                {analyzing ? "Analyzing..." : "Analyze Image"}
              </Button>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="text-subtitle-1 font-bold mb-4">1.1 Analysis Results</h2>
            <div className="space-y-4 text-body">
              {results ? (
                <>
                  <div className="space-y-2">
                    <p className="font-bold">Detected Condition:</p>
                    <p>{results.disease}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-bold">Confidence Level:</p>
                    <p>{results.confidence.toFixed(2)}%</p>
                  </div>
                </>
              ) : (
                <p>Upload an image to see the analysis results.</p>
              )}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-subtitle-1 font-bold mb-4">1.2 Recommendations</h2>
            <div className="space-y-4 text-body">
              {results ? (
                <ul className="list-disc list-inside space-y-2">
                  {getRecommendations(results.disease).map((rec, index) => (
                    <li key={index}>{rec}</li>
                  ))}
                </ul>
              ) : (
                <p>Recommendations will appear here after analysis.</p>
              )}
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Index;

