#!/bin/bash

# Build and copy script for Right-Click Gemini Nano
echo "🔨 Building extension with Vite..."

# Clean previous build
npm run clean

# Build the extension
npm run build

# Copy manifest and icons to dist
echo "📋 Copying manifest and icons..."
cp manifest.json dist/
cp -r icons dist/

echo "✅ Build complete! Extension ready in dist/ folder"
echo "📁 Load the 'dist' folder as an unpacked extension in Chrome"
echo "🚀 Use 'npm run dev' for development with hot reload"
