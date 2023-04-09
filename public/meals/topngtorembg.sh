#usr/bin/bash

# Select all input images and convert them to png save to output
mkdir png
echo 'new folder created!'
convert *.* -set filename:f '%t' png/'%[filename:f].png'

# All output files to Remove Background command
rembg p png/. bgless/
