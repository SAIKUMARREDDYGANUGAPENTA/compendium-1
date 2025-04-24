import { NavigateFunction } from 'react-router-dom';

export const isLocalPath = (path: string): boolean => {
  // Check if the path is relative to the public folder
  return path.startsWith('/pdfs/') || path.startsWith('pdfs/');
};

export const formatLocalPath = (path: string): string => {
  // Convert forward slashes to backslashes for Windows
  return path.replace(/\//g, '\\');
};

export const getPublicPdfPath = (pdfPath: string): string => {
  // Remove leading slash if present
  const cleanPath = pdfPath.startsWith('/') ? pdfPath.slice(1) : pdfPath;
  
  // In development, use the local server URL with correct protocol
  if (process.env.NODE_ENV === 'development') {
    // Encode the path to handle spaces and special characters
    const encodedPath = encodeURI(cleanPath);
    return `${window.location.protocol}//${window.location.host}/${encodedPath}`;
  }
  
  // In production (Vercel), use the deployed URL
  const encodedPath = encodeURI(cleanPath);
  return `${window.location.origin}/${encodedPath}`;
};

export const getAbsolutePdfPath = (pdfPath: string): string => {
  if (isLocalPath(pdfPath)) {
    return getPublicPdfPath(pdfPath);
  }
  
  return pdfPath;
};

export const openPdfViewer = (navigate: NavigateFunction, pdfUrl: string, title?: string) => {
  if (isLocalPath(pdfUrl)) {
    // For files in public folder, get the full URL and open in new tab
    const fullUrl = getPublicPdfPath(pdfUrl);
    window.open(fullUrl, '_blank');
  } else {
    // For external URLs, open directly in new tab
    window.open(pdfUrl, '_blank');
  }
}; 