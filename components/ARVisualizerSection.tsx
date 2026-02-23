'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

const products = [
  { id: 1, name: 'Qora Divan', image: '/images/real/collection-living.jpg' },
  { id: 2, name: 'Chef Stuli', image: '/images/real/collection-dining.jpg' },
  { id: 3, name: 'Skandinaviya Stolchasi', image: '/images/real/showroom-main.jpg' },
  { id: 4, name: 'Italiya Stol', image: '/images/real/showroom-side-1.jpg' },
  { id: 5, name: 'Minimalist Yotoq', image: '/images/real/collection-bedroom.jpg' },
  { id: 6, name: 'Trend Lampa', image: '/images/real/showroom-side-2.jpg' },
];

export function ARVisualizerSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[0] | null>(null);
  const [productScale, setProductScale] = useState(30);
  const [showPreview, setShowPreview] = useState(false);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' }
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsCameraActive(true);
      }
    } catch {
      alert('Kameraga ruxsat berilmadi');
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
      setIsCameraActive(false);
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context && videoRef.current.readyState === videoRef.current.HAVE_ENOUGH_DATA) {
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;
        context.drawImage(videoRef.current, 0, 0);
        setCapturedImage(canvasRef.current.toDataURL('image/jpeg'));
        stopCamera();
      }
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCapturedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const drawProductPreview = () => {
    if (capturedImage && canvasRef.current && selectedProduct) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        const img = new window.Image();
        img.onload = () => {
          canvasRef.current!.width = img.width;
          canvasRef.current!.height = img.height;
          context.drawImage(img, 0, 0);

          // Draw product image with transparency
          const productImg = new window.Image();
          productImg.crossOrigin = 'anonymous';
          productImg.onload = () => {
            const scale = productScale / 100;
            const productWidth = canvasRef.current!.width * scale;
            const productHeight = (productImg.height / productImg.width) * productWidth;
            const x = (canvasRef.current!.width - productWidth) / 2;
            const y = canvasRef.current!.height - productHeight - 50;

            context.globalAlpha = 0.6;
            context.drawImage(productImg, x, y, productWidth, productHeight);
            context.globalAlpha = 1.0;

            // Draw border
            context.strokeStyle = '#C6A253';
            context.lineWidth = 3;
            context.strokeRect(x - 5, y - 5, productWidth + 10, productHeight + 10);

            setShowPreview(true);
          };
          productImg.src = selectedProduct.image;
        };
        img.src = capturedImage;
      }
    }
  };

  const downloadPreview = () => {
    if (canvasRef.current) {
      const link = document.createElement('a');
      link.href = canvasRef.current.toDataURL('image/jpeg');
      link.download = `sofmebel-preview-${Date.now()}.jpg`;
      link.click();
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-white via-cream to-beigeMid py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="section-label mb-3">Augmented Reality</p>
          <h2 className="section-title mb-4">
            Mebel Simulyatori<br />
            <span className="italic">Uyingizda qanday ko&apos;rinishini ko&apos;rish</span>
          </h2>
          <p className="mx-auto max-w-2xl text-greenDeep/70">
            📷 Uyingiz rasmi oling, mahsulotni tanlang va viryual qilib mebelni ko&apos;ring. 
            Buyurtma berishdan oldin haqiqiy natijani bilib oling!
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Camera/Upload Area */}
          <div className="lg:col-span-2">
            {!capturedImage ? (
              <>
                {/* Camera View */}
                {isCameraActive ? (
                  <div className="space-y-4">
                    <div className="relative rounded-3xl overflow-hidden border-4 border-goldAccent shadow-strong">
                      <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        className="w-full h-96 object-cover bg-black"
                      />
                      <div className="absolute inset-0 border-4 border-dashed border-goldAccent/40 rounded-3xl pointer-events-none" />
                      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-greenDeep/90 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        📸 Rasm oling
                      </p>
                    </div>

                    <div className="flex gap-3 flex-wrap justify-center">
                      <button
                        onClick={capturePhoto}
                        className="flex items-center gap-2 bg-greenDeep hover:bg-greenMid text-white px-6 py-3 rounded-2xl font-semibold transition-all hover:shadow-strong hover:scale-105"
                      >
                        <span>✓ Rasm olish</span>
                      </button>
                      <button
                        onClick={stopCamera}
                        className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-2xl font-semibold transition-all"
                      >
                        <span>✕ Yopish</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={startCamera}
                    className="w-full rounded-3xl border-4 border-dashed border-goldAccent bg-goldAccent/10 py-20 flex flex-col items-center justify-center gap-4 hover:bg-goldAccent/20 transition-all"
                  >
                    <span className="text-5xl">📷</span>
                    <div className="text-center">
                      <p className="text-lg font-bold text-greenDeep">Kamerani yoqish</p>
                      <p className="text-sm text-greenDeep/60">Uyingizni fotolashtiring</p>
                    </div>
                  </button>
                )}

                {/* File Upload Option */}
                <div className="mt-6 text-center">
                  <p className="text-sm text-greenDeep/60 mb-3">yoki</p>
                  <label className="inline-flex items-center gap-2 bg-beigeMid hover:bg-beigeDark text-greenDeep px-6 py-3 rounded-2xl font-semibold cursor-pointer transition-all">
                    <span>📁 Rasmni yuklash</span>
                    <input
                      type="file"
                      ref={fileInputRef}
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </>
            ) : (
              <>
                {/* Preview Canvas */}
                <div className="space-y-4">
                  <div className="relative rounded-3xl overflow-hidden border-4 border-goldAccent shadow-strong bg-black">
                    <canvas
                      ref={canvasRef}
                      className="w-full h-96 object-cover"
                    />
                    {selectedProduct && (
                      <div className="absolute top-4 left-4 bg-greenDeep/90 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        ✓ {selectedProduct.name}
                      </div>
                    )}
                  </div>

                  {/* Scale Control */}
                  {selectedProduct && (
                    <div className="bg-cream border-2 border-goldAccent/30 rounded-2xl p-4">
                      <label className="flex items-center justify-between text-sm font-medium text-greenDeep mb-2">
                        <span>Kattalik: {productScale}%</span>
                      </label>
                      <input
                        type="range"
                        min="10"
                        max="80"
                        value={productScale}
                        onChange={(e) => setProductScale(parseInt(e.target.value))}
                        className="w-full h-2 bg-beigeDark rounded-lg appearance-none cursor-pointer accent-goldAccent"
                      />
                    </div>
                  )}

                  <div className="flex gap-3 flex-wrap justify-center">
                    {selectedProduct && !showPreview && (
                      <button
                        onClick={drawProductPreview}
                        className="flex items-center gap-2 bg-greenDeep hover:bg-greenMid text-white px-6 py-3 rounded-2xl font-semibold transition-all hover:shadow-strong"
                      >
                        <span>👁 Ko&apos;rish</span>
                      </button>
                    )}
                    {showPreview && (
                      <button
                        onClick={downloadPreview}
                        className="flex items-center gap-2 bg-greenDeep hover:bg-greenMid text-white px-6 py-3 rounded-2xl font-semibold transition-all hover:shadow-strong"
                      >
                        <span>⬇ Yuklab olish</span>
                      </button>
                    )}
                    <button
                      onClick={() => {
                        setCapturedImage(null);
                        setSelectedProduct(null);
                        setShowPreview(false);
                      }}
                      className="flex items-center gap-2 bg-beigeDark hover:bg-beigeMid text-greenDeep px-6 py-3 rounded-2xl font-semibold transition-all"
                    >
                      <span>↻ Yangi rasm</span>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Product Selection */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="rounded-3xl border-2 border-goldAccent/30 bg-white shadow-soft p-6 space-y-4">
                <h3 className="font-display text-lg font-bold text-greenDeep">🛋️ Mebel tanlang</h3>
                <p className="text-xs text-greenDeep/60">
                  {capturedImage ? 'Mahsulotni tanlab ko\'ring' : 'Avval rasm oling'}
                </p>

                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {products.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => {
                        setSelectedProduct(product);
                        setShowPreview(false);
                      }}
                      disabled={!capturedImage}
                      className={`w-full rounded-xl p-3 text-left transition-all flex items-center gap-3 ${
                        selectedProduct?.id === product.id
                          ? 'bg-greenDeep text-white shadow-strong scale-105'
                          : capturedImage
                          ? 'bg-cream hover:bg-beigeMid text-greenDeep hover:-translate-y-0.5'
                          : 'bg-beigeMid text-greenDeep/50 cursor-not-allowed'
                      }`}
                    >
                      <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-beigeDark flex-shrink-0">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm line-clamp-1">{product.name}</p>
                      </div>
                      {selectedProduct?.id === product.id && (
                        <span className="text-lg">✓</span>
                      )}
                    </button>
                  ))}
                </div>

                {/* Info */}
                <div className="rounded-xl bg-goldAccent/10 border border-goldAccent/30 p-3 space-y-2 text-xs text-greenDeep/70">
                  <p className="font-semibold">💡 Qanday ishlaydi:</p>
                  <ul className="space-y-1">
                    <li>✓ Rasm yoki video kadrni oling</li>
                    <li>✓ Mebelni tanlang</li>
                    <li>✓ Kattalikni o&apos;zgartiring</li>
                    <li>✓ Natijani ko&apos;rish va yuklab olish</li>
                  </ul>
                </div>

                {selectedProduct && capturedImage && (
                  <a
                    href="#cta"
                    className="block w-full rounded-xl bg-greenDeep hover:bg-greenMid text-white font-semibold py-3 text-center text-sm"
                  >
                    Buyurtma qilish
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
