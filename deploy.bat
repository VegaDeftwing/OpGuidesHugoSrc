@echo off
REM If a command fails, then the deploy stops
setlocal enabledelayedexpansion
set "deploying_message=Deploying updates to GitHub..."
echo \033[0;32m%deploying_message%\033[0m

REM Build the project
hugo -t bookvega

REM Go To Public folder
cd public

REM Add changes to git
git add .

REM Commit changes
set msg="rebuilding site %date% %time%"
if "%*" NEQ "" (
    set msg="%*"
)
git commit -m !msg!

REM Push source and build repos
git push origin master

REM Go back to the source repo and commit that too
cd ..

git add .

set msg="update site source %date% %time%"
if "%*" NEQ "" (
    set msg="%*"
)
git commit -m !msg!

git push origin main
