#!/bin/bash

# Script to help extract and organize WordPress files from All-in-One WP Migration export
# Usage: ./extract-wpress.sh your-site.wpress

set -e

if [ -z "$1" ]; then
    echo "Usage: ./extract-wpress.sh your-site.wpress"
    echo ""
    echo "This script helps extract files from All-in-One WP Migration .wpress files."
    echo "Note: .wpress files are actually ZIP archives with a different extension."
    exit 1
fi

WPRESS_FILE="$1"
EXTRACT_DIR="extracted-wordpress"

if [ ! -f "$WPRESS_FILE" ]; then
    echo "Error: File '$WPRESS_FILE' not found!"
    exit 1
fi

echo "📦 Extracting $WPRESS_FILE..."
echo ""

# Try to extract as ZIP (wpress files are often just renamed ZIP files)
if command -v unzip &> /dev/null; then
    # Create extraction directory
    mkdir -p "$EXTRACT_DIR"
    
    # Try extracting
    if unzip -q "$WPRESS_FILE" -d "$EXTRACT_DIR" 2>/dev/null; then
        echo "✅ Successfully extracted to $EXTRACT_DIR/"
        echo ""
        echo "📁 Looking for wp-content folder..."
        
        # Find wp-content folder
        WP_CONTENT=$(find "$EXTRACT_DIR" -type d -name "wp-content" | head -1)
        
        if [ -n "$WP_CONTENT" ]; then
            echo "✅ Found wp-content at: $WP_CONTENT"
            echo ""
            echo "📋 Next steps:"
            echo "1. Review the extracted files in: $EXTRACT_DIR"
            echo "2. Copy wp-content folder to your project root"
            echo "3. Remove third-party themes/plugins"
            echo "4. Run: git add . && git commit -m 'Initial commit'"
        else
            echo "⚠️  wp-content folder not found in expected location"
            echo "   Please check the extracted files manually"
        fi
    else
        echo "❌ Failed to extract as ZIP. The file might be in a different format."
        echo ""
        echo "💡 Alternative extraction methods:"
        echo "1. Install WordPress locally and use All-in-One WP Migration to import"
        echo "2. Use online extractor: https://www.wpress-extractor.com/"
        echo "3. Install Node.js and use: npm install -g wpress-extractor"
    fi
else
    echo "❌ 'unzip' command not found. Please install it first:"
    echo "   macOS: Already installed"
    echo "   Linux: sudo apt-get install unzip"
    echo "   Windows: Install 7-Zip or WinRAR"
fi

