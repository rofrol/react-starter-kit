@echo off
REM http://stackoverflow.com/questions/9385899/separate-tokens-in-batch-file
REM http://stackoverflow.com/questions/14952295/set-output-of-a-command-as-a-variable-with-pipes/25954264#25954264
setlocal
set file=.env
for /f "delims== tokens=1,2" %%a in (%file%) do (
  endlocal
  set %%a=%%b
)
