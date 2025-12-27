const IMAGE_STORAGE_KEY = 'portfolio_blog_images';

export interface StoredImage {
  id: string;
  name: string;
  dataUrl: string;
  size: number;
  uploadedAt: string;
}

export function uploadImage(file: File): Promise<StoredImage> {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith('image/')) {
      reject(new Error('File must be an image'));
      return;
    }

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      reject(new Error('Image must be less than 5MB'));
      return;
    }

    const reader = new FileReader();
    
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      const image: StoredImage = {
        id: `img_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        name: file.name,
        dataUrl,
        size: file.size,
        uploadedAt: new Date().toISOString(),
      };

      // Save to localStorage
      const images = getStoredImages();
      images.push(image);
      localStorage.setItem(IMAGE_STORAGE_KEY, JSON.stringify(images));

      resolve(image);
    };

    reader.onerror = () => {
      reject(new Error('Failed to read image file'));
    };

    reader.readAsDataURL(file);
  });
}

export function getStoredImages(): StoredImage[] {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(IMAGE_STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function deleteImage(imageId: string): void {
  const images = getStoredImages().filter(img => img.id !== imageId);
  localStorage.setItem(IMAGE_STORAGE_KEY, JSON.stringify(images));
}

export function getImageUrl(imageId: string): string | null {
  const images = getStoredImages();
  const image = images.find(img => img.id === imageId);
  return image ? image.dataUrl : null;
}

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}
