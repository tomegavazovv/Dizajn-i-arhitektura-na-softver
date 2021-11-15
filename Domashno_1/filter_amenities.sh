#!/bin/bash

str="amenity"

for amenity in $*
do
str+="=$amenity "
done

osmfilter map --keep="${str}"



