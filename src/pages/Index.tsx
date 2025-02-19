
import { useState } from 'react';
import Layout from '../components/Layout';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = async () => {
    // Placeholder for analysis functionality
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
    }, 2000);
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
              <p>Upload an image to see the analysis results.</p>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-subtitle-1 font-bold mb-4">1.2 Recommendations</h2>
            <div className="space-y-4 text-body">
              <p>Recommendations will appear here after analysis.</p>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Index;

