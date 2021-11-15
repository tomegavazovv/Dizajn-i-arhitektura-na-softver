#!/bin/bash

awk -F , '{  if( length($4) > 0) print}' 
