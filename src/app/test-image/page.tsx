import Image from 'next/image';

export default function TestImage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
        <div className="relative aspect-video w-full">
          <Image
            src="/project2/4.png"
            alt="Test Image 4"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Test Image 4</h1>
          <p className="text-gray-600 dark:text-gray-300">
            This is a test page to check if the image loads correctly.
          </p>
        </div>
      </div>
    </div>
  );
}
