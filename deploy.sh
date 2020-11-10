#!/bin/sh

# If a command fails then the deploy stops
set -e

printf "\033[0;32mDeploying updates to GitHub...\033[0m\n"

# Build the project.
hugo -t book

# Go To Public folder
cd public

# Add changes to git.
git add .

# Commit changes.
msg="rebuilding site $(date)"
if [ -n "$*" ]; then
	msg="$*"
fi
git commit -m "$msg"

# Push source and build repos.
git push origin master

# Go back to the source repo and commit that too
cd ..

git add .

msg="update site source $(date)"
if [ -n "$*" ]; then
	msg="$*"
fi
git commit -m "$msg"

git push origin main