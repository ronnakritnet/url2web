import LZString from 'lz-string';

export function compress(data: string): string {
  try {
    const compressed = LZString.compressToEncodedURIComponent(data);
    if (!compressed) {
      throw new Error('Compression returned empty string');
    }
    return compressed;
  } catch (error) {
    console.error('Compression error:', error);
    throw new Error('Failed to compress data');
  }
}

export function decompress(data: string): string | null {
  try {
    const result = LZString.decompressFromEncodedURIComponent(data);
    if (result === null || result === undefined) {
      throw new Error('Decompression returned null');
    }
    return result;
  } catch (error) {
    console.error('Decompression error:', error);
    return null;
  }
}
