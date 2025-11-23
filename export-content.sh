#!/bin/bash
# Helper script to organize exported WordPress content

echo "📦 WordPress Content Export Helper"
echo ""
echo "This script helps organize your exported content for TSX rebuild"
echo ""
echo "Steps:"
echo "1. Export WordPress content (Tools → Export in WP-Admin)"
echo "2. Download the XML file to: content-export/wordpress-export.xml"
echo "3. Download media files to: content-export/media/"
echo "4. Run this script to organize everything"
echo ""
echo "After exporting, place files in content-export/ and run:"
echo "  ./export-content.sh organize"
