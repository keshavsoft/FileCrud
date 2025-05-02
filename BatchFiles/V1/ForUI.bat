@echo off
cd ..\CrudFrontEndInGulp
git pull

call gulp build:publicDir

xcopy .\publicDir ..\FileCrud\public /h /i /c /k /e /r /y

cd ..\FileCrud