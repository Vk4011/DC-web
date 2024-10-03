import React from 'react';

const Home = () => {
  return (
    <div className="h-screen overflow-y-scroll p-4 bg-gray-50">
      {/* Header */}
      <div className="text-3xl text-blue-300 mb-8">Home</div>

      {/* Section: GPU Cloud, Serverless, Storage */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">GPU Cloud</h2>
          <p className="text-gray-500">Deploy a GPU pod.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Serverless</h2>
          <p className="text-gray-500">Autoscale your workload with traffic &lt; 250ms cold-start.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Storage</h2>
          <p className="text-gray-500">Share network storage among all your pods.</p>
        </div>
      </div>

      {/* Section: Usage and Resources */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Usage</h3>
          <p>Rolling Average: <span className="font-bold">$0.00/day</span></p>
          <p>Current Spend Rate: <span className="font-bold">$0.00/hr</span></p>
          {/* Chart placeholder */}
          <div className="mt-4 h-32 bg-gray-200 rounded"></div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <p>GPUs: 0</p>
          <p>vCPUs: 0</p>
          <p>Storage: 0 GB</p>
          <p>Endpoints: 0</p>
        </div>
      </div>

      {/* Quick Deploy Section */}
      <div className="bg-white p-4 rounded shadow mb-8">
        <h3 className="text-lg font-semibold mb-4">Quick Deploy</h3>
        <p>Quick deploy custom endpoints with minimal config.</p>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {/* Cards */}
          <div className="bg-gray-100 p-4 rounded shadow text-center">
            <h4 className="font-bold">Serverless vLLM</h4>
            <p className="text-gray-500">Deploy OpenAI-compatible Large Language Model (LLM) Endpoints.</p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Start</button>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow text-center">
            <h4 className="font-bold">Infinity Vector Embeddings</h4>
            <p className="text-gray-500">Deploy a wide range of text-embedding models and frameworks.</p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Start</button>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow text-center">
            <h4 className="font-bold">Faster Whisper</h4>
            <p className="text-gray-500">Implementation of Whisper model using CTranslate2.</p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Start</button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {/* More Cards */}
          <div className="bg-gray-100 p-4 rounded shadow text-center">
            <h4 className="font-bold">SD Automatic1111</h4>
            <p className="text-gray-500">Automatic1111 API that powers one of the most popular Stable Diffusion web interfaces.</p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Start</button>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow text-center">
            <h4 className="font-bold">Stable Diffusion XL</h4>
            <p className="text-gray-500">A text-to-image generative AI model that creates 1024x1024 images.</p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Start</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
