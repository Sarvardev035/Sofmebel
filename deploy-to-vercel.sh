#!/bin/bash
# Sof Mebel - Vercel Deployment Script
# This script automates the deployment to Vercel

set -e  # Exit on any error

echo "🚀 Sof Mebel - Vercel Deployment Script"
echo "========================================"

# Step 1: Verify project
echo "1️⃣  Verifying project structure..."
if [ ! -f "package.json" ]; then
  echo "❌ package.json not found!"
  exit 1
fi
echo "✅ Project verified"

# Step 2: Install dependencies
echo ""
echo "2️⃣  Installing dependencies..."
npm install
echo "✅ Dependencies installed"

# Step 3: Build project
echo ""
echo "3️⃣  Building project for production..."
npm run build
echo "✅ Production build successful"

# Step 4: Git operations
echo ""
echo "4️⃣  Preparing Git repository..."
git add -A
git commit -m "build: Production build ready for Vercel deploy" || echo "No changes to commit"
git push origin main
echo "✅ Code pushed to GitHub"

# Step 5: Deploy to Vercel
echo ""
echo "5️⃣  Deploying to Vercel..."
echo ""
echo "📝 Please follow these steps:"
echo "   1. Visit: https://vercel.com/new"
echo "   2. Select 'Import Git Repository'"
echo "   3. Connect: https://github.com/Sarvardev035/Sofmebel"
echo "   4. Configure project settings:"
echo "      - Framework: Next.js"
echo "      - Build Command: npm run build"
echo "      - Output Directory: .next"
echo "      - Root Directory: ./"
echo "   5. Click 'Deploy'"
echo ""
echo "✅ Deployment initiated!"
echo ""
echo "🌐 Your project will be available at: https://sofmebel.vercel.app"
