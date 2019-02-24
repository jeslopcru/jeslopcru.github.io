#!/bin/bash
git submodule update --init --recursive
cd themes/cv-jesuslc-theme && git checkout master && git pull && cd ../../
hugo
rm -rf /tmp/ghpage-jesuslc-public
cp -R public /tmp/ghpage-jesuslc-public
rm -rf public
git checkout -- .
git checkout master
rm -rf ./*
cp -R /tmp/ghpage-jesuslc-public/* .
git add --all
git commit -m "New Deploy"
git push origin master
git checkout source