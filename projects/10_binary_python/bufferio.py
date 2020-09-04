import io

binary_stream = io.BytesIO()

binary_stream.write("HelloWorld\n".encode('ascii'))

print(binary_stream) # <_io.BytesIO object at 0x...>
print(type(binary_stream)) # <class '_io.BytesIO'>

print(binary_stream.getbuffer()) # <memory at 0x100521c80>
print(type(binary_stream.getbuffer())) # <class 'memoryview'>

print(binary_stream.getvalue()) # <memory at 0x100521c80>
print(type(binary_stream.getvalue())) # <class 'memoryview'>



