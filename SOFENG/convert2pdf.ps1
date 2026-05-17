$ppt = New-Object -ComObject PowerPoint.Application
$ppt.Visible = [Microsoft.Office.Core.MsoTriState]::msoTrue

$files = Get-ChildItem -Path "c:\SEMESTER4\SOFENG" -Filter *.pptx

foreach ($file in $files) {
    $pdfPath = [System.IO.Path]::ChangeExtension($file.FullName, ".pdf")
    if (-not (Test-Path $pdfPath)) {
        Write-Host "Converting: $($file.Name)"
        $presentation = $ppt.Presentations.Open($file.FullName, [Microsoft.Office.Core.MsoTriState]::msoTrue, [Microsoft.Office.Core.MsoTriState]::msoFalse, [Microsoft.Office.Core.MsoTriState]::msoFalse)
        $presentation.SaveAs($pdfPath, [Microsoft.Office.Interop.PowerPoint.PpSaveAsFileType]::ppSaveAsPDF)
        $presentation.Close()
    } else {
        Write-Host "Skipping, PDF already exists: $($file.Name)"
    }
}

$ppt.Quit()
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($ppt)
Write-Host "Done!"
