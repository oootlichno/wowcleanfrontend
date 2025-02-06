#!/bin/bash
echo "Building the project..."
npm run build

echo "Deploying to S3..."
aws s3 sync ./build s3://wowclean.pl --delete

echo "Deployment complete!"

#!/ ./deploy.sh 