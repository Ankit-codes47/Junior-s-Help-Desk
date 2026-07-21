import qrcode
url="https://ankit-codes47.github.io/Junior-s-Help-Desk/"
img=qrcode.make(url)
img.save("qrcode.png")