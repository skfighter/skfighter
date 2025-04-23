import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { stat } from 'fs/promises';

export async function GET() {
  try {
    // Path to your ZIP file
    const filePath = path.resolve('./public/files', 'chrome-extension.zip');
    
    // Check if file exists
    try {
      await stat(filePath);
    } catch (e) {
      return NextResponse.json(
        { error: 'ZIP file not found' },
        { status: 404 }
      );
    }
    
    // Read file as buffer
    const fileBuffer = fs.readFileSync(filePath);
    
    // Return file with appropriate headers for ZIP
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Disposition': 'attachment; filename=skGoogle.zip',
        'Content-Type': 'application/zip',
      },
    });
  } catch (error) {
    console.error('Download error:', error);
    return NextResponse.json(
      { error: 'Failed to download ZIP' },
      { status: 500 }
    );
  }
}