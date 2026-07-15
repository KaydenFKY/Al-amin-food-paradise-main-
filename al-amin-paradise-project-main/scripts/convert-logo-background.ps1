Add-Type -AssemblyName System.Drawing
$src = "src/assets/Screenshot 2026-07-06 142719.png"
$dst = "src/assets/logo-black-bg.png"
$bmp = [System.Drawing.Bitmap]::FromFile($src)
$w = $bmp.Width
$h = $bmp.Height
$visited = New-Object 'bool[,]' $w, $h
$queue = New-Object System.Collections.Queue
$isWhite = {
    param($c)
    $c.R -ge 250 -and $c.G -ge 250 -and $c.B -ge 250 -and $c.A -ge 250
}
function EnqueueWhite([int]$x, [int]$y) {
    if ($x -lt 0 -or $x -ge $w -or $y -lt 0 -or $y -ge $h) { return }
    if ($visited[$x,$y]) { return }
    $c = $bmp.GetPixel($x, $y)
    if (&$isWhite $c) {
        $visited[$x,$y] = $true
        $queue.Enqueue([tuple]::Create($x, $y))
    }
}
for ($x = 0; $x -lt $w; $x++) {
    EnqueueWhite $x 0
    EnqueueWhite $x ($h - 1)
}
for ($y = 0; $y -lt $h; $y++) {
    EnqueueWhite 0 $y
    EnqueueWhite ($w - 1) $y
}
while ($queue.Count -gt 0) {
    $p = $queue.Dequeue()
    $x = $p.Item1
    $y = $p.Item2
    EnqueueWhite ($x + 1) $y
    EnqueueWhite ($x - 1) $y
    EnqueueWhite $x ($y + 1)
    EnqueueWhite $x ($y - 1)
}
$out = New-Object System.Drawing.Bitmap $w, $h
$black = [System.Drawing.Color]::FromArgb(255, 0, 0, 0)
for ($x = 0; $x -lt $w; $x++) {
    for ($y = 0; $y -lt $h; $y++) {
        if ($visited[$x,$y]) {
            $out.SetPixel($x, $y, $black)
        } else {
            $out.SetPixel($x, $y, $bmp.GetPixel($x, $y))
        }
    }
}
$out.Save($dst, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
$out.Dispose()
Write-Host "Saved $dst"
