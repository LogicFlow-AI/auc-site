#!/usr/bin/env python3
"""
Extract All-in-One WP Migration .wpress files
The .wpress format is a JSON file with base64-encoded content
"""

import json
import base64
import os
import sys
from pathlib import Path

def extract_wpress(wpress_file, output_dir="extracted-wordpress"):
    """Extract a .wpress file"""
    
    if not os.path.exists(wpress_file):
        print(f"Error: File '{wpress_file}' not found!")
        return False
    
    print(f"📦 Reading {wpress_file}...")
    print("   (This may take a while for large files)")
    
    try:
        # Read the JSON file
        with open(wpress_file, 'r', encoding='utf-8') as f:
            # Skip the "package.js" header if present
            content = f.read()
            if content.startswith('package.js'):
                # Remove the header
                json_start = content.find('{')
                if json_start > 0:
                    content = content[json_start:]
            
            data = json.loads(content)
        
        print(f"✅ Successfully parsed JSON structure")
        print(f"📁 Creating output directory: {output_dir}")
        os.makedirs(output_dir, exist_ok=True)
        
        # Extract files
        if 'files' in data:
            files = data['files']
            total_files = len(files)
            print(f"📄 Found {total_files} files to extract")
            
            extracted = 0
            for file_path, file_data in files.items():
                # Skip if file_data is not a dict with content
                if not isinstance(file_data, dict) or 'content' not in file_data:
                    continue
                
                # Decode base64 content
                try:
                    content = base64.b64decode(file_data['content'])
                except Exception as e:
                    print(f"⚠️  Warning: Could not decode {file_path}: {e}")
                    continue
                
                # Create directory structure
                full_path = os.path.join(output_dir, file_path)
                os.makedirs(os.path.dirname(full_path), exist_ok=True)
                
                # Write file
                with open(full_path, 'wb') as out_file:
                    out_file.write(content)
                
                extracted += 1
                if extracted % 100 == 0:
                    print(f"   Extracted {extracted}/{total_files} files...")
            
            print(f"✅ Extracted {extracted} files to {output_dir}/")
            
            # Look for wp-content
            wp_content = os.path.join(output_dir, 'wp-content')
            if os.path.exists(wp_content):
                print(f"\n✅ Found wp-content folder at: {wp_content}")
                return True
            else:
                # Search for it
                for root, dirs, files in os.walk(output_dir):
                    if 'wp-content' in dirs:
                        wp_content = os.path.join(root, 'wp-content')
                        print(f"\n✅ Found wp-content folder at: {wp_content}")
                        return True
        else:
            print("⚠️  No 'files' key found in JSON structure")
            print("   File structure:", list(data.keys())[:10])
            return False
            
    except json.JSONDecodeError as e:
        print(f"❌ Error: Not a valid JSON file")
        print(f"   {e}")
        return False
    except Exception as e:
        print(f"❌ Error extracting file: {e}")
        import traceback
        traceback.print_exc()
        return False

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 extract_wpress.py <file.wpress> [output_dir]")
        sys.exit(1)
    
    wpress_file = sys.argv[1]
    output_dir = sys.argv[2] if len(sys.argv) > 2 else "extracted-wordpress"
    
    success = extract_wpress(wpress_file, output_dir)
    sys.exit(0 if success else 1)

