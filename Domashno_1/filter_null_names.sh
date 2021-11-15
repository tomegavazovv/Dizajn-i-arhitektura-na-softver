#!/bin/bash

file=$1

awk -F , '{  if( length($4) > 0) print}' 
