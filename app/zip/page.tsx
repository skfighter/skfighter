import Link from 'next/link';

export default function ZIPPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">Zip Download Page</h1>
      
      <div className="mb-6">
        {/* Option 1: Direct link to download */}
        <Link 
          href="/api/download-zip" 
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Download Zip
        </Link>
      </div>
      
      {/* Optional: Display ZIP in browser */}
      <div className="w-full max-w-3xl h-[600px] border border-gray-300 rounded">
        <iframe 
          src="/files/chrome-extension.zip" 
          className="w-full h-full" 
          title="Zip Preview"
        />
      </div>
    </div>
  );
}