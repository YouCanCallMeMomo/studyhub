$ppt = New-Object -ComObject PowerPoint.Application
$pres = $ppt.Presentations.Open("c:\SEMESTER4\SOFENG\03_Agile Principle & Lean Foundations.pptx", [Microsoft.Office.Core.MsoTriState]::msoTrue, [Microsoft.Office.Core.MsoTriState]::msoFalse, [Microsoft.Office.Core.MsoTriState]::msoFalse)

$text = ""
foreach ($slide in $pres.Slides) {
    foreach ($shape in $slide.Shapes) {
        if ($shape.HasTextFrame -and $shape.TextFrame.HasText) {
            $text += $shape.TextFrame.TextRange.Text + "`n"
        }
    }
}

$pres.Close()
$ppt.Quit()
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($ppt) | Out-Null
Set-Content -Path "c:\SEMESTER4\SOFENG\scratch_txt.txt" -Value $text
Write-Host "Done"
