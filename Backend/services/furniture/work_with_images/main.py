import base64


with open("images/image_1.png", "rb") as image_file:
    image_bytes = image_file.read()
    print(image_bytes)
    print("\n\n\n")
    image_b64 = base64.b64encode(image_bytes).decode("utf-8")
    print(image_b64)