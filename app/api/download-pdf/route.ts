import { NextResponse } from 'next/server';
import { readFile, stat } from 'fs/promises';
import { join } from 'path';

export async function GET() {
  try {
    const filePath = join(process.cwd(), 'public', 'files', 'chrome-extension.zip');
    
    // Check if file exists
    try {
      await stat(filePath);
    } catch {
      return NextResponse.json(
        { error: 'ZIP file not found' },
        { status: 404 }
      );
    }
    
    // Read and return file
    const fileBuffer = await readFile(filePath);
    
    return new Response(new Uint8Array(fileBuffer), {
      headers: {
        'Content-Disposition': 'attachment; filename="chrome-extension.zip"',
        'Content-Type': 'application/zip',
        'Content-Length': fileBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error('Download error:', error);
    return NextResponse.json(
      { error: 'Failed to download file' },
      { status: 500 }
    );
  }
}