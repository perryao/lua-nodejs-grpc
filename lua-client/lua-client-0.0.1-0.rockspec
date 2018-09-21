package = "lua-client"
version = "0.0.1-0"
supported_platforms = { "linux", "macosx" }
dependencies = {
  "grpc-lua == 0.0.1"
}
source = {
  url = "git://github.com/perryao/lua-nodejs-grpc/lua-client",
  tag = ""
}
build = {
  type = "builtin",
  modules = {
    ["lua-client"] = "main.lua"
  }
}
