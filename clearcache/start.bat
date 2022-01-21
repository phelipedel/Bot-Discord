title "Bigodon Clear Cache Start"
timeout 2
test&cls
color 0c  
echo 
echo \--- ## manutencao ---/
echo  
pause
timeout 1
:loop
color 0a 
@echo (%time%) STARTANDO Limpeza de Cache... ReduceMemory.exe
color 0a
@echo Pressione Enter nesta ReduceMemory
start "limpando cache ram" ReduceMemory.exe
timeout /t 30
@echo Reiniciando a limpeza de Memoria ram.
timeout /t 2 >nul
taskkill /F /FI "WindowTitle eq Server"
@echo Servidor esta reiniciando agora.
timeout /t 1
cls
goto loop