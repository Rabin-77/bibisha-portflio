#!/usr/bin/env python3
"""
Python Server for Dr. D. Bibisha – Dental Surgeon Portfolio
Allows running and serving the website locally or on any cloud server using pure Python 3.

Usage:
    python3 server.py [PORT]
    Default port: 3000
"""

import os
import sys
import http.server
import socketserver

DEFAULT_PORT = 3000

def get_directory():
    # If dist folder exists (built app), serve from dist; otherwise serve workspace root
    if os.path.isdir("dist"):
        return "dist"
    return "."

class SinglePageAppHandler(http.server.SimpleHTTPRequestHandler):
    """
    HTTP handler supporting clean SPA routing and proper MIME types.
    """
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=get_directory(), **kwargs)

    def do_GET(self):
        # Resolve requested file path
        requested_path = self.translate_path(self.path)
        
        # If file does not exist and it's not an asset, fall back to index.html (SPA routing)
        if not os.path.exists(requested_path) and not self.path.startswith(('/assets/', '/favicon')):
            self.path = '/index.html'
            
        return super().do_GET()

def run(port=DEFAULT_PORT):
    target_dir = get_directory()
    print("=" * 65)
    print("  DR. D. BIBISHA – DENTAL SURGEON PORTFOLIO (PYTHON SERVER)")
    print("=" * 65)
    print(f"  * Serving Directory : {os.path.abspath(target_dir)}")
    print(f"  * Local URL         : http://localhost:{port}")
    print(f"  * Network Access    : http://0.0.0.0:{port}")
    print("=" * 65)
    print("  Press Ctrl+C to stop the server.\n")

    # Allow immediate address reuse on restart
    socketserver.TCPServer.allow_reuse_address = True
    
    with socketserver.TCPServer(("0.0.0.0", port), SinglePageAppHandler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down Python server.")
            httpd.shutdown()

if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_PORT
    run(port)
