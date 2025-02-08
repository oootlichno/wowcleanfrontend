#!/bin/bash

echo "🚀 Starting deployment process..."

# Stop on errors
set -e

# Clear build cache
echo "🧹 Cleaning old build files..."
rm -rf build

# Install dependencies (optional, only if needed)
# echo "📦 Installing dependencies..."
# npm install

# Build the project
echo "🏗️ Building the project..."
npm run build

# Deploy to S3
echo "🚀 Uploading files to S3..."
aws s3 sync ./build s3://wowclean.pl --delete

# Invalidate CloudFront cache 
echo "🧹 Clearing CloudFront cache..."
aws cloudfront create-invalidation --distribution-id E1AMJT9UMWP73V --paths "/*"

echo "✅ Deployment complete!"


#!/ ./deploy.sh 