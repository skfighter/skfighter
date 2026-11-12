export default function ZIPPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Chrome Extension Download</h1>
      <p className="text-gray-400 mb-6 max-w-md">
        Download the extension as a .zip, unzip it, then load it in Chrome via
        chrome://extensions with Developer mode on and &quot;Load unpacked&quot;.
      </p>
      {/* Static file in /public; the old /api/download-zip route never existed */}
      <a
        href="/files/chrome-extension.zip"
        download
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Download Zip
      </a>
    </main>
  );
}
