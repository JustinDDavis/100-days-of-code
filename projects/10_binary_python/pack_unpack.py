import struct

binary_data = struct.pack("icc" * 2, 83222, b'A', b'B', 83222, b'A', b'B')
print(binary_data)


unpacked_binary_data = struct.unpack("icc" * 2, binary_data)
print(unpacked_binary_data)