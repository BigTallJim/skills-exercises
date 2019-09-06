require 'socket'

server = TCPServer.new(2345)

socket = server.accept
they_said = ""
until they_said == 'Exit' do
  socket.puts "What do you say?"

  they_said = socket.gets.chomp

  socket.puts "You said: #{they_said}. Goodbye!"
end
socket.close
